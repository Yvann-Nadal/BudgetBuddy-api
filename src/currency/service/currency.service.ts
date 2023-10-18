import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CurrencyEntity } from "../entity/currency.entity";
import { Repository } from "typeorm";

Injectable();

export class CurrencyService {
  constructor(
    @InjectRepository(CurrencyEntity)
    private readonly currencyRepository: Repository<CurrencyEntity>
  ) {}

  async getAllCurrency() {
    return await this.currencyRepository.find();
  }

  async getOneCurrencyById(id: number) {
    return await this.currencyRepository
      .createQueryBuilder("currency")
      .where("currency.id = :id", { id })
      .getOne();
  }

  async createCurrency(currency: CurrencyEntity) {
    return await this.currencyRepository.save(currency);
  }

  async updateCurrency(id: number, currency: CurrencyEntity) {
    const currencyUpdate = await this.currencyRepository.findOneBy({ id });
    const currencyUpdated = { ...currencyUpdate, ...currency };
    await this.currencyRepository.save(currencyUpdated);
    return currencyUpdated;
  }

  async deleteCurrency(id: number) {
    return await this.currencyRepository.delete(id);
  }
}
