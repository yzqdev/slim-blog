import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiBody, ApiTags} from "@nestjs/swagger";
import {ArticleService} from "./article.service";
import {ArticleDto} from "./dto/article.dto";
import {Article} from "./article.entity";


@ApiTags("文章")
@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {
    }

    @Get('/index')
    getIndex() {
        return 'hello'
    }

    @Get("/getTypeInfo")
    getTypeInfo() {
    }

    @ApiBody({type: ArticleDto})
    @Post("/addArticle")
    async addArticle(@Body() article: ArticleDto): Promise<Article> {
        return await this.articleService.addArticle(article)

    }

    @Get("/updateArticle")
    async updateArticle(@Body() article: ArticleDto): Promise<Article> {
        return await this.articleService.updateArticle(article)
    }

    @Get("/getArticleList")
    async getArticleList() {
        return await this.articleService.getArticleList()
    }

    @Post("/delArticle/:id")
    async delArticleById(@Param('id') id: string) {
        return await this.articleService.deleteArticleById(id)
    }

    @Get("/getArticleById/:id")
    async getArticleById(@Param('id')id:string) {
        return await this.articleService.getArticleById(id)
    }
}
