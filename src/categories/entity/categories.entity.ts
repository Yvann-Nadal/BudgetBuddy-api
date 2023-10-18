import { TransactionsEntity } from "src/transactions/entity/transactions.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity("categories")
export class CategoriesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  categoryName: string;

  @Column({ type: "varchar" })
  categoryDescription: string;

  @OneToMany(() => TransactionsEntity, transactions => transactions.categories_id)
  transactions?: TransactionsEntity[];
}
