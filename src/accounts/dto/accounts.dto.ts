import { IsOptional, IsString } from "class-validator";



export class AccountsCreateDTO{
    @IsString()
    name: string;
    @IsString()
    balance: number;
}

export class AccountsUpdateDTO{
    @IsOptional()
    @IsString()
    id: number;
    @IsOptional()
    @IsString()
    name: string;
    @IsOptional()
    @IsString()
    balance: number;
}