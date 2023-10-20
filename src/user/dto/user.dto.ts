import { IsNumber, IsOptional, IsString } from "class-validator";
import { AccountsCreateDTO, AccountsUpdateDTO } from "src/accounts/dto/accounts.dto";


export class UsersCreateDTO{
    @IsString()
    username: string;
    @IsString()
    password: string;
    @IsString()
    email: string;
    @IsOptional()
    accounts: AccountsCreateDTO[];
}

export class UsersUpdateDTO{
    @IsOptional()
    @IsNumber()
    id: number;
    @IsOptional()
    @IsString()
    username: string;
    @IsOptional()
    @IsString()
    email: string;
    @IsOptional()
    @IsString()
    password: string;
    @IsOptional()
    accounts: AccountsUpdateDTO[];
}