import { Role } from "src/auth/enums/rol.enum";
import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({type : 'enum', enum: Role, default: Role.User})
    rol: Role;

    @DeleteDateColumn()
    deletedAt: Date;

}
