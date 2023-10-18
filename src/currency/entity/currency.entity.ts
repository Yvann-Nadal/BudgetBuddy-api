import { AccountEntity } from "src/accounts/entity/accounts.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity("currency")
export class CurrencyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  currencyType: string;

  @OneToMany(()=> AccountEntity, account => account.currency_id)
  accounts: AccountEntity[];
}
