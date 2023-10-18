import {
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Body,
  } from '@nestjs/common';
import { CurrencyService } from '../service/currency.service';
import { CurrencyEntity } from '../entity/currency.entity';


@Controller('currency')
    export class CurrencyController {
            
            constructor(private readonly currencyService: CurrencyService) {}

    @Get()
    getAllCurrency() {
        return this.currencyService.getAllCurrency();
    }

    @Get(':id')
    getOneCurrencyById(@Param('id', ParseIntPipe) id: number) {
        return this.currencyService.getOneCurrencyById(id);
    }


    @Post()
    createCurrency(@Body() currency: CurrencyEntity) {
        return this.currencyService.createCurrency(currency);
    }

}