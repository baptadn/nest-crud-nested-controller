import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthorModule } from './author/author.module'
import { ArticleModule } from './article/article.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: '',
      password: '',
      database: 'tuto_nest',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    AuthorModule,
    ArticleModule,
  ],
  controllers: [],
})
export class AppModule {}
