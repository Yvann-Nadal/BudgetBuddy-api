import { IsString } from "class-validator";

export class CurrencyCreateDto {
  @IsString()
  currencyType: string;
}

export class CurrencyUpdateDto {
  @IsString()
  currencyType: string;
}
