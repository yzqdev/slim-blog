import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity( { })
export class Admin {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({name:'username'})
    username: string;

    @Column({name:'password'})
    password: string;

    @Column( {name:'nickname'})
    nickname?: string;
    @Column({name:'email'} )
    email?:string;
    @Column( {nullable:true,name:'phone'})
    phone?: string;
    @Column({name:'role',nullable: true})
    role?: string;
}
