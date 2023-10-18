import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('transactions')
export class TransactionsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    transactionType: string;

    @Column({ type: 'varchar' })
    transactionAmount: string;

    @Column({ type: 'varchar' })
    transactionDescription: string;

}
