import { IsOptional, IsString } from "class-validator";


export class TransactionsDTO{
    @IsString()
    categoryName: string;
    @IsString()
    currencyDescription: string;
}