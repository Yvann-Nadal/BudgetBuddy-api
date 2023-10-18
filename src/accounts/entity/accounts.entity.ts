import { CurrencyEntity } from "src/currency/entity/currency.entity";
import { TransactionsEntity } from "src/transactions/entity/transactions.entity";
import { UsersEntity } from "src/user/entity/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";

@Entity("accounts")
export class AccountEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  balance: number;

  @ManyToOne(() => UsersEntity, user => user.accounts, {
    cascade: ["insert", "update"]
  })
  user_id: UsersEntity;

  @OneToMany(() => TransactionsEntity, transactions => transactions.account_id)
  transactions: TransactionsEntity[];

  @ManyToOne(()=> CurrencyEntity, currency => currency.accounts,{
    cascade: ["insert", "update"]
  })
  currency_id: CurrencyEntity;
}
