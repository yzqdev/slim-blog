import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Article {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({name:'type_id'})
    typeId: number;

    @Column({name:"title"})
    title: string;

    @Column()
    content: string;
    @Column()
    introduce: string;
    @Column( )
    createTime: Date;
    @Column( )
    viewCount: number;

    @Column( )
    partCount: number;
    @Column( )
   isTop: number;
    @Column( )
    updateTime: Date;

}
