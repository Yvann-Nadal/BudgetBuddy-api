import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TransactionsController } from "./controller/transactions.controller";
import { TransactionsService } from "./service/transactions.service";
import { TransactionsEntity } from "./entity/transactions.entity";



@Module({
    imports: [TypeOrmModule.forFeature([TransactionsEntity])],
    controllers: [TransactionsController],
    providers: [TransactionsService],
    exports: [TransactionsService],
})
export class TransactionsModule {}