import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AccountsService } from '../service/accounts.service';
import { AccountEntity } from '../entity/accounts.entity';
import { AccountsCreateDTO, AccountsUpdateDTO } from '../dto/accounts.dto';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService) {}

    @Get()
    getAllAccounts() {
        return this.accountsService.getAllAccounts();
    }

    @Get(':id')
    getOneAccountById(@Param('id') id: number) {
        return this.accountsService.getOneAccountById(id);
    }

    @Post()
    createAccount(@Body() account: AccountsCreateDTO) {
        return this.accountsService.createAccount(account);
    }

    @Put(':id')
    updateAccount(@Param('id') id: number, @Body() account: AccountsUpdateDTO) {
        return this.accountsService.updateAccount(id, account);
    }

    @Delete(':id')
    deleteAccount(@Param('id') id: number) {
        return this.accountsService.deleteAccount(id);
    }

   
}
