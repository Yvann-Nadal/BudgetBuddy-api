import { IsOptional, IsString } from "class-validator";


export class TransactionsCreateDTO{
    @IsString()
    transactionName: string;
    @IsString()
    transactionDescription: string;
}

export class TransactionsUpdateDTO{
    @IsOptional()
    @IsString()
    id: number;
    @IsOptional()
    @IsString()
    transactionName: string;
    @IsOptional()
    @IsString()
    transactionDescription: string;
}