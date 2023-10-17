import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class AccountsDto {
    @IsNotEmpty()
    @IsString()
    readonly id: string;

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;
}
