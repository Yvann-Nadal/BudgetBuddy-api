import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TransactionsEntity } from "../entity/transactions.entity";
import { Repository } from "typeorm";
import { TransactionsCreateDTO, TransactionsUpdateDTO } from "../dto/transactions.dto";
import { AccountEntity } from "src/accounts/entity/accounts.entity";
import { HttpService } from "@nestjs/axios";
import { AxiosResponse } from "axios";

Injectable();

export class TransactionsService {
  constructor(
    @InjectRepository(TransactionsEntity)
    private readonly transactionsRepository: Repository<TransactionsEntity>,
    @InjectRepository(AccountEntity)
    private readonly accountsRepository: Repository<AccountEntity>,
    private readonly httpService: HttpService
  ) {}

  async getAllTransactions() {
    return await this.transactionsRepository.find({
      relations: ["account_id", "currency_id", "categories_id"]
    });
  }

  async getOneTransactionById(id: number) {
    return await this.transactionsRepository
      .createQueryBuilder("transactions")
      .leftJoinAndSelect("transactions.account_id", "account")
      .leftJoinAndSelect("transactions.currency_id", "currency")
      .leftJoinAndSelect("transactions.categories_id", "categories")
      .where("transactions.id = :id", { id })
      .getOne();
  }
  
 
  async createTransaction(transaction: TransactionsCreateDTO) {
    const newTransaction = await this.transactionsRepository.create(transaction);
    await this.transactionsRepository.save(newTransaction);
    const account = await this.accountsRepository.findOneBy(transaction.account_id);

    const apiUrl = 'https://cdn.taux.live/api/ecb.json';
    const response: AxiosResponse = await this.httpService.get(apiUrl).toPromise();
    const converter = response.data.rates;

    // Comparer la clé JSON avec transaction.currency_id.currencyType
    if (converter[transaction.currency_id.currencyType]) {
     
      const currencyRate = converter[transaction.currency_id.currencyType];
      console.log(`Taux de change pour ${transaction.currency_id.currencyType}: ${currencyRate}`);
    } else {
      console.log(`Clé ${transaction.currency_id.currencyType} introuvable dans la réponse JSON.`);
    }
    
    const currencyRate = converter[transaction.currency_id.currencyType];
    const accountRate = converter[transaction.account_id.currency_id.currencyType];
    const converterRate = currencyRate / accountRate;
    const transactionAmount = transaction.transactionAmount * converterRate;
    const OldAmount = account.balance;
    const GainOrSpend = transaction.isGain;
    if(GainOrSpend === true) {
        const NewAmount = OldAmount + transactionAmount;
        const accountUpdate = { balance: NewAmount };
        const accountUpdated = { ...account, ...accountUpdate };
        await this.accountsRepository.save(accountUpdated);
        }
    else {
        const NewAmount = OldAmount - transactionAmount;
        const accountUpdate = { balance: NewAmount };
        const accountUpdated = { ...account, ...accountUpdate };
        await this.accountsRepository.save(accountUpdated);
    }

    await this.transactionsRepository
    .createQueryBuilder()
    .update(TransactionsEntity)
    .set({transactionAmount: transactionAmount})
    .where("id = :id", { id : newTransaction.id })
    .execute();


    return newTransaction;
  }

  async updateTransaction(id: number, transaction: TransactionsUpdateDTO) {
    const transactions = await this.transactionsRepository.createQueryBuilder("transactions")
        .leftJoinAndSelect("transactions.account_id", "account")
        .where("transactions.id = :id", { id })
        .getOne();

        const OldAmount = transactions.account_id.balance;
        const NewTransactionAmount = transaction.transactionAmount;
        const GainOrSpend = transactions.isGain;



        if(GainOrSpend === true) {
            const NewAmount = OldAmount + NewTransactionAmount;
            const accountUpdate = { balance: NewAmount };
            const accountUpdated = { ...transactions.account_id, ...accountUpdate };
            await this.transactionsRepository.save(accountUpdated);
            }
        else {
            const NewAmount = OldAmount - NewTransactionAmount;
            const accountUpdate = { balance: NewAmount };
            const accountUpdated = { ...transactions.account_id, ...accountUpdate };
            await this.transactionsRepository.save(accountUpdated);
        }

    const transactionsUpdate = { ...transactions, ...transaction };
    await this.transactionsRepository
    .createQueryBuilder()
    .update(TransactionsEntity)
    .set(transactionsUpdate)
    .where("id = :id", { id : transactions.account_id.id })
    .execute();

    return transactionsUpdate;
  }

  async deleteTransaction(id: number) {
    return await this.transactionsRepository.delete(id);
  }
}
