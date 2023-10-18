import { IsNumber, IsOptional, IsString } from "class-validator";
import { AccountEntity } from "src/accounts/entity/accounts.entity";
import { CurrencyEntity } from "src/currency/entity/currency.entity";

export class TransactionsCreateDTO {
  @IsString()
  transactionType: string;
  @IsNumber()
  transactionAmount: number;
  @IsString()
  transactionDescription: string;
  @IsOptional()
  account_id: AccountEntity;
  @IsOptional()
  currency_id: CurrencyEntity;
}

export class TransactionsUpdateDTO {
  @IsOptional()
  @IsNumber()
  id: number;
  @IsOptional()
  @IsString()
  transactionType: string;
  @IsOptional()
  @IsNumber()
  transactionAmount: number;
  @IsOptional()
  @IsString()
  transactionDescription: string;
  @IsOptional()
  account_id: AccountEntity;
  @IsOptional()
  currency_id: CurrencyEntity;
}
