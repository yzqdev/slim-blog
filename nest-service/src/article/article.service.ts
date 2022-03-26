import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Article} from "./article.entity";
import {ArticleDto} from "./dto/article.dto";

@Injectable()
export class ArticleService {
    constructor(@InjectRepository(Article) private articleRepository: Repository<Article>) {
    }

   async addArticle(article: ArticleDto) {
      return   this.articleRepository.save(article)
    }

    async updateArticle(article: ArticleDto):Promise<any> {
        return this.articleRepository.update(article.id,article);
    }

    async getArticleList():Promise<Article[]> {
        return this.articleRepository.find();
    }

    async deleteArticleById(id: string) {
        return this.articleRepository.delete(id);
    }

    async getArticleById(id: string) {
        return this.articleRepository.findOne(id);
    }
}
