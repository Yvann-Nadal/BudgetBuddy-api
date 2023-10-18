import { IsNumber, IsOptional, IsString } from "class-validator";

export class CurrencyCreateDto {
  @IsString()
  currencyType: string;
}

export class CurrencyUpdateDto {
  @IsOptional()
  @IsNumber()
  id: number;
  @IsOptional()
  @IsString()
  currencyType: string;
}
