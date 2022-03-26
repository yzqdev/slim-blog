import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {HomeModule} from './home/home.module';
import {AdminController} from './admin/admin.controller';
import {AdminService} from './admin/admin.service';
import {AdminModule} from './admin/admin.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Admin} from "./admin/admin.entity";
import {ArticleController} from './article/article.controller';
import {ArticleService} from './article/article.service';
import {ArticleModule} from './article/article.module';
import {Article} from "./article/article.entity";
import {AuthModule} from "./auth/auth.module";
import {SnakeNamingStrategy} from "typeorm-naming-strategies";

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'slimblog',
        autoLoadEntities: true,
        synchronize:true,
        namingStrategy:new SnakeNamingStrategy()
    }), HomeModule, AdminModule, ArticleModule,AuthModule],
    controllers: [AppController,],
    providers: [AppService,],
})
export class AppModule {
}
