import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


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

}