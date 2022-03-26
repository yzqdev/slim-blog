import {Controller, Get} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {ArticleService} from "../article/article.service";
@ApiTags('主页')
@Controller('home')
export class HomeController {
constructor(private readonly  articleService:ArticleService) {
}
    @Get("/index")
    index(){}
    @Get("/getArticleList")
  async  getArticleList(){
      return await  this.articleService.getArticleList()
    }
    @Get("/getArticleById/:id")
    getArticleById(){}
    @Get("/getTypeInfo")
    getTypeInfo(){}
    @Get("/getListById/:id")
    getListById(){}
    @Get("/getAllPartCount")
    getAllPartCount(){}
    @Get("/getListBbs")
    getListBbs(){}
}
