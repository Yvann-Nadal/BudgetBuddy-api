import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./user/user.module";
import { AccountsModule } from "./accounts/accounts.module";
import { CategorieModule } from "./categories/categories.module";
import { CurrencyModule } from "./currency/currency.module";
import { TransactionsModule } from "./transactions/transactions.module";
import { CashifyModule } from "nestjs-cashify";

const rates = {
  GBP: 0.87,
  EUR: 1.0,
  USD: 1.05
};

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
      autoLoadEntities: true
    }),
    UserModule,
    AccountsModule,
    CategorieModule,
    CurrencyModule,
    TransactionsModule,
    CashifyModule.forRoot({
      base: "EUR",
      rates
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
