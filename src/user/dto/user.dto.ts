import { IsOptional, IsString } from "class-validator";


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
    @IsString()
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