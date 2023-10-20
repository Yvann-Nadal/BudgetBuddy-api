import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { AccountsCreateDTO, AccountsUpdateDTO } from "src/accounts/dto/accounts.dto";
import { TransactionsCreateDTO, TransactionsUpdateDTO } from "src/transactions/dto/transactions.dto";

export class CurrencyCreateDto {
  @IsEnum(['USD', 'JPY','BGN','CZK','DKK','GBP'])
  currencyType:  'USD'| 'JPY'|'BGN'|'CZK'|'DKK'|'GBP';
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
  @IsEnum(['USD', 'JPY','BGN','CZK','DKK','GBP'])
  currencyType:  'USD'| 'JPY'|'BGN'|'CZK'|'DKK'|'GBP';
  @IsOptional()
  accounts: AccountsUpdateDTO[];
  @IsOptional()
  transactions: TransactionsUpdateDTO[];
}
