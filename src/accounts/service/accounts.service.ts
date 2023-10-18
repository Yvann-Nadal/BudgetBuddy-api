import { Injectable } from '@nestjs/common';
import { Account } from '../entity/accounts.entity';

@Injectable()
export class AccountsService {
    private accounts: Account[] = [];

    create(account: Account): Account {
        this.accounts.push(account);
        return account;
    }

    findAll(): Account[] {
        return this.accounts;
    }

    findOne(id: number): Account {
        return this.accounts.find(account => account.id === id);
    }

    update(id: number, account: Account): Account {
        const index = this.accounts.findIndex(account => account.id === id);
        this.accounts[index] = account;
        return account;
    }

    delete(id: number): void {
        this.accounts = this.accounts.filter(account => account.id !== id);
    }
}
