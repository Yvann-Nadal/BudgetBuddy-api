import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AccountsService } from '../service/accounts.service';
import { Account } from '../entity/accounts.entity';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService) {}

    @Get()
    async findAll(): Promise<Account[]> {
        return this.accountsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Account> {
        return this.accountsService.findOne(id);
    }

    @Post()
    async create(@Body() account: Account): Promise<Account> {
        return this.accountsService.create(account);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() account: Account): Promise<Account> {
        return this.accountsService.update(id, account);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.accountsService.delete(id);
    }
}
