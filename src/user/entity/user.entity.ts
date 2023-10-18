import { AccountEntity } from 'src/accounts/entity/accounts.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


@Entity('user')
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    username: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({ type: 'varchar' })
    email: string;

    @OneToMany(() => AccountEntity, account => account.user_id)
    accounts: AccountEntity[];


}