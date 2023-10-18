import { IsOptional, IsString } from "class-validator";


export class UserCreateDTO{
    @IsString()
    username: string;
    @IsString()
    password: string;
    @IsString()
    email: string;
}

export class UserUpdateDTO{
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