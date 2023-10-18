import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriesEntity } from "../entity/categories.entity";
import { Repository } from "typeorm";
import { Update } from "aws-sdk/clients/dynamodb";
import { CategoriesCreateDTO,CategoriesUpdateDTO } from "../dto/categories.dto";


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

    async createCategorie(categorie: CategoriesCreateDTO) {
        return await this.categoriesRepository.save(categorie);
    }

    async updateCategorie(id: number, categorie: CategoriesUpdateDTO) {
        const categories = await this.categoriesRepository.findOneBy({ id });

        const categoriesUpdate = { ...categories, ...categorie };
        await this.categoriesRepository.save(categoriesUpdate);

        return categoriesUpdate;
    }

    async deleteCategorie(id: number) {
        return await this.categoriesRepository.delete(id);
    }

}