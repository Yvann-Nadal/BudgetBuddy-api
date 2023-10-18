import {
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Body,
  } from '@nestjs/common';
import { TransactionsService } from '../service/transactions.service';
import { TransactionsEntity } from '../entity/transactions.entity';

@Controller('transactions')
    export class TransactionsController {
            
            constructor(private readonly transactionsService: TransactionsService) {}

        @Get()
        getAllTransactions() {
            return this.transactionsService.getAllTransactions();
        }

        @Get(':id')
        getOneTransactionById(@Param('id', ParseIntPipe) id: number) {
            return this.transactionsService.getOneTransactionById(id);
            }

        @Post()
        createTransaction(@Body() transaction: TransactionsEntity) {
            return this.transactionsService.createTransaction(transaction);
        }
    }