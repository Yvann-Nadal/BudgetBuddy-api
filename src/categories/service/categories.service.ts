import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriesEntity } from "../entity/categories.entity";
import { Repository } from "typeorm";


Injectable();

export class CategoriesService {
    constructor(
        @InjectRepository(CategoriesEntity)
        private readonly categoriesRepository: Repository<CategoriesEntity>,
    ) {}

    async getAllCategories() {
        return await this.categoriesRepository.find();
    }

    async getOneCategorieById(id: number) {
        return await this.categoriesRepository.createQueryBuilder('categories')
        .where('categories.id = :id', { id })
        .getOne();
    }

    async createCategorie(categorie: CategoriesEntity) {
        return await this.categoriesRepository.save(categorie);
    }

}