import { Injectable } from '@nestjs/common';
import { AccountsDto } from '../dto/accounts.dto';

@Injectable()
export class AccountsService {
    private accounts: AccountsDto[] = [];

    create(account: AccountsDto): AccountsDto {
        this.accounts.push(account);
        return account;
    }

    findAll(): AccountsDto[] {
        return this.accounts;
    }

    findOne(id: string): AccountsDto {
        return this.accounts.find(account => account.id === id);
    }

    update(id: string, account: AccountsDto): AccountsDto {
        const index = this.accounts.findIndex(account => account.id === id);
        this.accounts[index] = account;
        return account;
    }

    delete(id: string): void {
        this.accounts = this.accounts.filter(account => account.id !== id);
    }
}
