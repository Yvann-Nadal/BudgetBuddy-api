import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TransactionsEntity } from "../entity/transactions.entity";
import { Repository } from "typeorm";
import { TransactionsCreateDTO, TransactionsUpdateDTO } from "../dto/transactions.dto";
import { AccountEntity } from "src/accounts/entity/accounts.entity";

Injectable();

export class TransactionsService {
  constructor(
    @InjectRepository(TransactionsEntity)
    private readonly transactionsRepository: Repository<TransactionsEntity>,
    @InjectRepository(AccountEntity)
    private readonly accountsRepository: Repository<AccountEntity>
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

    
        // Créez la nouvelle transaction
        const newTransaction = await this.transactionsRepository.create(transaction);
        await this.transactionsRepository.save(newTransaction);
    
        const account = await this.accountsRepository.findOneBy(transaction.account_id);

    
        if (transaction.isGain) {
            account.balance += transaction.transactionAmount;
        } else {
            account.balance -= transaction.transactionAmount;
        }
    
        await this.accountsRepository.save(account);


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

        console.log('OldAmount:', OldAmount);
        console.log('GainOrSpend:', GainOrSpend);
        console.log('NewTransactionAmount:', NewTransactionAmount);


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
