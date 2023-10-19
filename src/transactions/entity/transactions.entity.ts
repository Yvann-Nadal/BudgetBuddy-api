import { AccountEntity } from "src/accounts/entity/accounts.entity";
import { CategoriesEntity } from "src/categories/entity/categories.entity";
import { CurrencyEntity } from "src/currency/entity/currency.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity("transactions")
export class TransactionsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  transactionType: string;

  @Column({ type: "varchar" })
  transactionAmount: number;

  @Column({ type: "varchar" })
  transactionDescription: string;

  @Column({ type: "boolean" })
  isGain: boolean = false;

  @ManyToOne(() => AccountEntity, account => account.transactions, {
    cascade: ["insert", "update"]
  })
  account_id: AccountEntity;

  @ManyToOne(() => CategoriesEntity, categories => categories.transactions, {
    cascade: ["insert", "update"]
  })
  categories_id: CategoriesEntity;

  @ManyToOne(() => CurrencyEntity, currency => currency.transactions, {
    cascade: ["insert", "update"]
  })
  currency_id: CurrencyEntity;
}
