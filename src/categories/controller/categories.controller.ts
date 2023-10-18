import {
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Body,
  } from '@nestjs/common';
import { CategoriesService } from '../service/categories.service';
import { CategoriesEntity } from '../entity/categories.entity';

@Controller('categories')
    export class CategoriesController {
            
            constructor(private readonly categoriesService: CategoriesService) {}

        @Get()
        getAllCategories() {
            return this.categoriesService.getAllCategories();
        }

        @Get(':id')
        getOneCategorieById(@Param('id', ParseIntPipe) id: number) {
            return this.categoriesService.getOneCategorieById(id);
            }

        @Post()
        createCategorie(@Body() categorie: CategoriesEntity) {
            return this.categoriesService.createCategorie(categorie);
        }
    }