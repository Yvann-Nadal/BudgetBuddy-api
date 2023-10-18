import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersEntity } from "../entity/user.entity";
import { Repository } from "typeorm";



Injectable();

export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly userRepository: Repository<UsersEntity>,
    ) {}

    async getAllUsers() {
        return await this.userRepository.find();
    }

    async getOneUserById(id: number) {
        return await this.userRepository.createQueryBuilder('user')
        .where('user.id = :id', { id })
        .getOne();
    }
}