import { IsNumber, IsOptional, IsString } from "class-validator";
import {
  TransactionsCreateDTO,
  TransactionsUpdateDTO
} from "src/transactions/dto/transactions.dto";
import { UsersEntity } from "src/user/entity/user.entity";

export class AccountsCreateDTO {
  @IsString()
  name: string;
  @IsNumber()
  balance: number;
  @IsOptional()
  transactions: TransactionsCreateDTO[];
  @IsOptional()
  user_id: UsersEntity;
}

export class AccountsUpdateDTO {
  @IsOptional()
  @IsNumber()
  id: number;
  @IsOptional()
  @IsString()
  name: string;
  @IsOptional()
  @IsNumber()
  balance: number;
  @IsOptional()
  transactions: TransactionsUpdateDTO[];
  @IsOptional()
  user_id: UsersEntity;
}
