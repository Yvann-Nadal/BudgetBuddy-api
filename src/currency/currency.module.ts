import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrencyController } from './controller/currency.controller';
import { CurrencyService } from './service/currency.service';
import { CurrencyEntity } from './entity/currency.entity';


@Module({
    imports: [TypeOrmModule.forFeature([CurrencyEntity])],
    controllers: [CurrencyController],
    providers: [CurrencyService],
    exports: [CurrencyService],
})
export class CurrencyModule {}