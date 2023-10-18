import { IsNumber, IsOptional, IsString } from "class-validator";



export class AccountsCreateDTO{
    @IsString()
    name: string;
    @IsNumber()
    balance: number;
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
}