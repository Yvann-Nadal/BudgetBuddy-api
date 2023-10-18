import { Controller, Get, Param, ParseIntPipe, Post, Body, Put, Delete } from "@nestjs/common";
import { CategoriesService } from "../service/categories.service";
import { CategoriesEntity } from "../entity/categories.entity";
import { CategoriesCreateDTO, CategoriesUpdateDTO } from "../dto/categories.dto";

@Controller("categories")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getAllCategories() {
    return this.categoriesService.getAllCategories();
  }

  @Get(":id")
  getOneCategorieById(@Param("id", ParseIntPipe) id: number) {
    return this.categoriesService.getOneCategorieById(id);
  }

  @Post()
  createCategorie(@Body() categorie: CategoriesCreateDTO) {
    return this.categoriesService.createCategorie(categorie);
  }

  @Put(":id")
  updateCategorie(@Param("id", ParseIntPipe) id: number, @Body() categorie: CategoriesUpdateDTO) {
    return this.categoriesService.updateCategorie(id, categorie);
  }

  @Delete(":id")
  deleteCategorie(@Param("id", ParseIntPipe) id: number) {
    return this.categoriesService.deleteCategorie(id);
  }
}
