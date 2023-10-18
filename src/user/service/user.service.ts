import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersEntity } from "../entity/user.entity";
import { Repository } from "typeorm";
import { UsersCreateDTO, UsersUpdateDTO } from "../dto/user.dto";



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
    
    async createUser(data: UsersCreateDTO) {
        try {
          return this.userRepository.save(data);
        } catch (error) {
          console.log(error);
          throw new Error('Error while creating user');
        }
      }

      async updateUser(id: number, data: UsersUpdateDTO) {
        const user = await this.userRepository.findOneBy({ id });
    
        const userUpdate = { ...user, ...data };
        await this.userRepository.save(userUpdate);
    
        return userUpdate;
      }

      async deleteUser(id: number) {
        return await this.userRepository.delete(id);
      }
}