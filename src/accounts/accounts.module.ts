import { Module } from '@nestjs/common';
import { AccountsController } from './controller/accounts.controller';
import { AccountsService } from './service/accounts.service';

@Module({
    controllers: [AccountsController],
    providers: [AccountsService],
})
export class AccountsModule {}
