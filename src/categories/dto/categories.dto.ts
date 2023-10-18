import { IsNumber, IsOptional, IsString } from "class-validator";

export class CategoriesCreateDTO {
  @IsString()
  categoryName: string;
  @IsString()
  categoryDescription: string;
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
}
