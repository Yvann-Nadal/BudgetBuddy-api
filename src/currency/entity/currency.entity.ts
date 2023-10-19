import { AccountEntity } from "src/accounts/entity/accounts.entity";
import { TransactionsEntity } from "src/transactions/entity/transactions.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Transaction } from "typeorm";

@Entity("currency")
export class CurrencyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ enum: ['USD', 'JPY','BGN','CZK','DKK','GBP'] } )
  currencyType:  'USD'| 'JPY'|'BGN'|'CZK'|'DKK'|'GBP';

  @OneToMany(()=> AccountEntity, account => account.currency_id)
  accounts: AccountEntity[];

  @OneToMany(()=> TransactionsEntity, transactions => transactions.currency_id)
  transactions: TransactionsEntity[];
}