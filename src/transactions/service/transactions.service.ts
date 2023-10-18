import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TransactionsEntity } from "../entity/transactions.entity";
import { Repository } from "typeorm";
import { TransactionsCreateDTO, TransactionsUpdateDTO } from "../dto/transactions.dto";

Injectable();

export class TransactionsService {
  constructor(
    @InjectRepository(TransactionsEntity)
    private readonly transactionsRepository: Repository<TransactionsEntity>
  ) {}

  async getAllTransactions() {
    return await this.transactionsRepository.find({ relations: ["account_id", "categories"] });
  }

  async getOneTransactionById(id: number) {
    return await this.transactionsRepository
      .createQueryBuilder("transactions")
      .leftJoinAndSelect("transactions.account_id", "account")
      .leftJoinAndSelect("transactions.categories", "categories")
      .where("transactions.id = :id", { id })
      .getOne();
  }

  async createTransaction(transaction: TransactionsCreateDTO) {
    return await this.transactionsRepository.save(transaction);
  }

  async updateTransaction(id: number, transaction: TransactionsUpdateDTO) {
    const transactions = await this.transactionsRepository.findOneBy({ id });

    const transactionsUpdate = { ...transactions, ...transaction };
    await this.transactionsRepository.save(transactionsUpdate);

    return transactionsUpdate;
  }

  async deleteTransaction(id: number) {
    return await this.transactionsRepository.delete(id);
  }
}
