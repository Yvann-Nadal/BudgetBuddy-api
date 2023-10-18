import { Module } from '@nestjs/common';
import { AccountsController } from './controller/accounts.controller';
import { AccountsService } from './service/accounts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from './entity/accounts.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AccountEntity])],
    controllers: [AccountsController],
    providers: [AccountsService],
    exports: [AccountsService],
})
export class AccountsModule {}
