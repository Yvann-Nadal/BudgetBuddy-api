import { Injectable } from "@nestjs/common";
import { AccountEntity } from "../entity/accounts.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AccountsCreateDTO, AccountsUpdateDTO } from "../dto/accounts.dto";
import { AxiosResponse } from "axios";
import { HttpService } from "@nestjs/axios";
import { zip } from "rxjs";

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly accountsRepository: Repository<AccountEntity>,
    private readonly httpService : HttpService
  ) {}

  async getAllAccounts() {
    return await this.accountsRepository.find({
      relations: ["user_id", "transactions", "currency_id"]
    });
  }

  async getOneAccountById(id: number) {
    return await this.accountsRepository
      .createQueryBuilder("account")
      .leftJoinAndSelect("account.user_id", "user")
      .leftJoinAndSelect("account.transactions", "transactions")
      .leftJoinAndSelect("account.currency_id", "currency")
      .where("account.id = :id", { id })
      .getOne();
  }

  async createAccount(data: AccountsCreateDTO) {
    try {
      return this.accountsRepository.save(data);
    } catch (error) {
      console.log(error);
      throw new Error("Error while creating account");
    }
  }

  async updateAccount(id: number, account: AccountsUpdateDTO) {
    const accounts = await this.accountsRepository.createQueryBuilder("account")
    .leftJoinAndSelect("account.currency_id", "currency")
    .where("account.id = :id", { id })
    .getOne();

    const accountsUpdate = { ...accounts, ...account };
    await this.accountsRepository.save(accountsUpdate);

    const apiUrl = 'https://cdn.taux.live/api/ecb.json';
    const response : AxiosResponse = await this.httpService.get(apiUrl).toPromise();
    const converter = response.data.rates;

    
    const currencyRate = converter[account.currency_id.currencyType];
    const accountRate = converter[accounts.currency_id.currencyType];
    const converterRate = currencyRate / accountRate;
    const OldAmount = accounts.balance;
    const NewAmount = OldAmount * converterRate;
    const NewAmountLimited = parseFloat(NewAmount.toFixed(2));
    accountsUpdate.balance = NewAmountLimited;

    await this.accountsRepository
    .createQueryBuilder()
    .update(AccountEntity)
    .set(accountsUpdate)
    .where("id = :id", {id})
    .execute();
    
    
    
    console.log(NewAmountLimited,"NewAmountLimited");
    // console.log(accountsUpdate,"accountsUpdate");

    return accountsUpdate;
  }

  async deleteAccount(id: number) {
    return await this.accountsRepository.delete(id); 
  }
}
