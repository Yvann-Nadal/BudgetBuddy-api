import { IsNumber, IsOptional, IsString } from "class-validator";

export class TransactionsCreateDTO {
  @IsString()
  transactionType: string;
  @IsNumber()
  transactionAmount: number;
  @IsString()
  transactionDescription: string;
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
}
