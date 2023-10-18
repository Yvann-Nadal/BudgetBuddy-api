import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("currency")
export class CurrencyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  currencyType: string;
}
