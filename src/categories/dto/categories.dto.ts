import { IsOptional, IsString } from "class-validator";

export class CategoriesCreateDTO {
  @IsString()
  categoryName: string;
  @IsString()
  categoryDescription: string;
}

export class CategoriesUpdateDTO {
  @IsOptional()
  @IsString()
  id: number;
  @IsOptional()
  @IsString()
  categoryName: string;
  @IsOptional()
  @IsString()
  categoryDescription: string;
}
