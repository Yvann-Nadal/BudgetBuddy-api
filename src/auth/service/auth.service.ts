import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthEntity } from '../entity/auth.entity';
import { Repository } from 'typeorm';


Injectable();

export class AuthService {
    constructor(
        @InjectRepository(AuthEntity)
        private readonly authRepository: Repository<AuthEntity>,
    ) {}

    async getAllAuths() {
        return await this.authRepository.find();
    }

    async getOneAuthById(id: number) {
        return await this.authRepository.createQueryBuilder('auth')
        .where('auth.id = :id', { id })
        .getOne();
    }

}