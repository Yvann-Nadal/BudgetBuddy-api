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
import { AuthModule } from "./auth/auth.module";
import { JWTGuard } from "./auth/guard/jwt.guard";
import { HttpModule } from "@nestjs/axios";
import { ConverterModule } from "./converter/converter.module";


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AccountsModule,
    UserModule,
    CategorieModule,
    CurrencyModule,
    TransactionsModule,
    AuthModule,
    ConverterModule
  ],
  controllers: [AppController],
  providers: [AppService, JWTGuard],
})
export class AppModule {}
