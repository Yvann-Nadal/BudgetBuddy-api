import { IsOptional, IsString } from "class-validator";


export class TransactionsDTO{
    @IsString()
    transactionType: string;
    @IsString()
    transactionAmount: string;
    @IsString()
    transactionDescription: string;
}