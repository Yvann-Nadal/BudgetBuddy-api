import { Controller, Get, Param, ParseIntPipe, Post, Body, Put, Delete } from "@nestjs/common";
import { CurrencyService } from "../service/currency.service";
import { CurrencyCreateDto, CurrencyUpdateDto } from "../dto/currency.dto";

@Controller("currency")
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get()
  getAllCurrency() {
    return this.currencyService.getAllCurrency();
  }

  @Get(":id")
  getOneCurrencyById(@Param("id", ParseIntPipe) id: number) {
    return this.currencyService.getOneCurrencyById(id);
  }

  @Post()
  createCurrency(@Body() currency: CurrencyCreateDto) {
    return this.currencyService.createCurrency(currency);
  }

  @Put(":id")
  updateCurrency(@Param("id", ParseIntPipe) id: number, @Body() currency: CurrencyUpdateDto) {
    return this.currencyService.updateCurrency(id, currency);
  }

  @Delete(":id")
  deleteCurrency(@Param("id", ParseIntPipe) id: number) {
    return this.currencyService.deleteCurrency(id);
  }
}
