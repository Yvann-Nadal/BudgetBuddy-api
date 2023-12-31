import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TransactionsController } from "./controller/transactions.controller";
import { TransactionsService } from "./service/transactions.service";
import { TransactionsEntity } from "./entity/transactions.entity";
import { AccountEntity } from "src/accounts/entity/accounts.entity";
import { JwtService } from "@nestjs/jwt";
import { HttpModule } from "@nestjs/axios";



@Module({
    imports: [TypeOrmModule.forFeature([TransactionsEntity, AccountEntity ]), HttpModule],
    controllers: [TransactionsController],
    providers: [TransactionsService],
    exports: [TransactionsService],
})
export class TransactionsModule {}