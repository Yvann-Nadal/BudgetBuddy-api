import { IsNumber, IsOptional, IsString } from "class-validator";
import { AccountsCreateDTO, AccountsUpdateDTO } from "src/accounts/dto/accounts.dto";
import { TransactionsCreateDTO, TransactionsUpdateDTO } from "src/transactions/dto/transactions.dto";

export class CurrencyCreateDto {
  @IsString()
  currencyType: string;
  @IsOptional()
  accounts: AccountsCreateDTO[];
  @IsOptional()
  transactions: TransactionsCreateDTO[];
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
  @IsOptional()
  transactions: TransactionsUpdateDTO[];
}
