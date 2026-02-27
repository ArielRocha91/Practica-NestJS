import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullname: string;

    @Column()
    position: string;

    @Column("decimal")
    salary: number;

    @Column({nullable: true})
    phone: string;

    @DeleteDateColumn()
    deletedAt: Date;

}

