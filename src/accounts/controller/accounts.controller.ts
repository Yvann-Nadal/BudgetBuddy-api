import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AccountsService } from '../service/accounts.service';
import { AccountsDto } from '../dto/accounts.dto';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService) {}

    @Get()
    async findAll(): Promise<AccountsDto[]> {
        return this.accountsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<AccountsDto> {
        return this.accountsService.findOne(id);
    }

    @Post()
    async create(@Body() account: AccountsDto): Promise<AccountsDto> {
        return this.accountsService.create(account);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() account: AccountsDto): Promise<AccountsDto> {
        return this.accountsService.update(id, account);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.accountsService.delete(id);
    }
}
