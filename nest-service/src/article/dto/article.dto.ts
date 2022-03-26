import {ApiProperty} from "@nestjs/swagger";

export class ArticleDto{

    @ApiProperty( )
    id: number;

    @ApiProperty( )
    typeId: number;
    @ApiProperty( )
    title: string;
    @ApiProperty( )
    content: string;
    @ApiProperty( )
    introduce: string;
    @ApiProperty( )
    createTime: Date;
    @ApiProperty( )
    viewCount: number;
    @ApiProperty( )
    partCount: number;
    @ApiProperty( )
    isTop: number;
    @ApiProperty( )
    updateTime: Date;
}
