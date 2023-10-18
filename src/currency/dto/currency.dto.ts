import { IsNumber, IsOptional, IsString } from "class-validator";
import { AccountsCreateDTO, AccountsUpdateDTO } from "src/accounts/dto/accounts.dto";

export class CurrencyCreateDto {
  @IsString()
  currencyType: string;
  @IsOptional()
  accounts: AccountsCreateDTO[];
}

export class CurrencyUpdateDto {
  @IsOptional()
  @IsNumber()
  id: number;
  @IsOptional()
  @IsString()
  currencyType: string;
  @IsOptional()
  accounts: AccountsUpdateDTO[];
}
