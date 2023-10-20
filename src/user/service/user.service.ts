import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersEntity } from "../entity/user.entity";
import { Repository } from "typeorm";
import { UsersCreateDTO, UsersUpdateDTO } from "../dto/user.dto";

Injectable();

export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>
  ) {}

  async getAllUsers() {
    return await this.userRepository.find({relations: ["accounts"]});
  }

  async findOneByUsername(username: UsersEntity['username']) {
    return await this.userRepository.findOneBy({ username });
  }

  async getOneUserById(id: number) {
    return await this.userRepository.createQueryBuilder("user")
    .leftJoinAndSelect("user.accounts", "accounts")
      .where("user.id = :id", { id })
      .getOne();
  }

    async createUser(user: UsersCreateDTO) {
        return await this.userRepository.save(user);
    }

    async updateUser(id: number, user: UsersUpdateDTO) {
        const users = await this.userRepository.findOneBy({ id });

        const usersUpdate = { ...users, ...user };
        await this.userRepository.save(usersUpdate);

        return usersUpdate;
    }

    async deleteUser(id: number) {
        return await this.userRepository.delete(id);
    }
    
}
