import {
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';
import { TransactionsService } from '../service/transactions.service';
import { TransactionsCreateDTO, TransactionsUpdateDTO } from '../dto/transactions.dto';

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
        createTransaction(@Body() transaction: TransactionsCreateDTO) {
            return this.transactionsService.createTransaction(transaction);
        }

        @Put(':id')
        updateTransaction(
            @Param('id', ParseIntPipe) id: number,
            @Body() transaction: TransactionsUpdateDTO,
            ) {
            return this.transactionsService.updateTransaction(id, transaction);
            }

        @Delete(':id')
        deleteTransaction(@Param('id', ParseIntPipe) id: number) {
            return this.transactionsService.deleteTransaction(id);
        }

    }