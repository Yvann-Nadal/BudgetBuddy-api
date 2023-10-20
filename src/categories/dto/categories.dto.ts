import { IsNumber, IsOptional, IsString } from "class-validator";
import {
  TransactionsCreateDTO,
  TransactionsUpdateDTO
} from "src/transactions/dto/transactions.dto";

export class CategoriesCreateDTO {
  @IsString()
  categoryName: string;
  @IsString()
  categoryDescription: string;
  @IsOptional()
  transactions: TransactionsCreateDTO[];
}

export class CategoriesUpdateDTO {
  @IsOptional()
  @IsNumber()
  id: number;
  @IsOptional()
  @IsString()
  categoryName: string;
  @IsOptional()
  @IsString()
  categoryDescription: string;
  @IsOptional()
  transactions: TransactionsUpdateDTO[];
}
