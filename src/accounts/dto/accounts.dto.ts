import { IsNumber, IsOptional, IsString } from "class-validator";
import { TransactionsCreateDTO, TransactionsUpdateDTO } from "src/transactions/dto/transactions.dto";



export class AccountsCreateDTO{
    @IsString()
    name: string;
    @IsNumber()
    balance: number;
    @IsOptional()
    transactions: TransactionsCreateDTO[];
}

export class AccountsUpdateDTO{
    @IsOptional()
    @IsNumber()
    id: number;
    @IsOptional()
    @IsString()
    name: string;
    @IsOptional()
    @IsNumber()
    balance: number;
    @IsOptional()
    transactions: TransactionsUpdateDTO[];
}