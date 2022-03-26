import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import {ArticleService} from "../article/article.service";
import {ArticleModule} from "../article/article.module";

@Module({
  imports:[ArticleModule],
  providers: [HomeService ],
  controllers: [HomeController]
})
export class HomeModule {}
