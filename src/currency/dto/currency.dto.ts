import { IsString } from 'class-validator';

export class CurrencyDTO{
    @IsString()
    currencyName: string;
}