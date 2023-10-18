import { AccountEntity } from "src/accounts/entity/accounts.entity";
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

  @ManyToOne(()=> AccountEntity, account => account.transactions,{
    cascade:['insert','update']
    })
  account_id: AccountEntity;
  }
