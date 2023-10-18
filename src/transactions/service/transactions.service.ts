import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TransactionsEntity } from "../entity/transactions.entity";
import { Repository } from "typeorm";


Injectable();

export class TransactionsService {
    constructor(
        @InjectRepository(TransactionsEntity)
        private readonly transactionsRepository: Repository<TransactionsEntity>,
    ) {}

    async getAllTransactions() {
        return await this.transactionsRepository.find();
    }

    async getOneTransactionById(id: number) {
        return await this.transactionsRepository.createQueryBuilder('transactions')
        .where('transactions.id = :id', { id })
        .getOne();
    }

    async createTransaction(transaction: TransactionsEntity) {
        return await this.transactionsRepository.save(transaction);
    }

}