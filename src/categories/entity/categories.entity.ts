import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('categories')
export class CategoriesEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    categoryName: string;

    @Column({ type: 'varchar' })
    categoryDescription: string;


}
