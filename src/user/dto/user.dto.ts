import { IsNumber, IsOptional, IsString } from "class-validator";


export class UsersCreateDTO{
    @IsString()
    username: string;
    @IsString()
    password: string;
    @IsString()
    email: string;
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
}