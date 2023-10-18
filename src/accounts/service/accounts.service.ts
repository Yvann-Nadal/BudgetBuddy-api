import { Injectable } from '@nestjs/common';
import { AccountEntity } from '../entity/accounts.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'aws-sdk';
import { Repository } from 'typeorm';
import { AccountsCreateDTO, AccountsUpdateDTO } from '../dto/accounts.dto';

@Injectable()
export class AccountsService {
    constructor(
        @InjectRepository(AccountEntity)
        private readonly accountsRepository: Repository<AccountEntity>,
    ) {}
    
    async getAllAccounts() {
        return await this.accountsRepository.find({relations: ['user_id', 'transactions']});
    }

    async getOneAccountById(id: number) {
        return await this.accountsRepository.createQueryBuilder('account')
        .leftJoinAndSelect('account.user_id', 'user')
        .leftJoinAndSelect('account.transactions', 'transactions')
        .where('account.id = :id', { id })
        .getOne();
    }

    async createAccount(data: AccountsCreateDTO) {
        try {
            return this.accountsRepository.save(data);
        } catch (error) {
            console.log(error);
            throw new Error('Error while creating account');
        }
    }

    async updateAccount(id: number, account: AccountsUpdateDTO) {
        const accounts = await this.accountsRepository.findOneBy({ id });

        const accountsUpdate = { ...accounts, ...account };
        await this.accountsRepository.save(accountsUpdate);

        return accountsUpdate;
    }

    async deleteAccount(id: number) {
        return await this.accountsRepository.delete(id);
    }
  
}
