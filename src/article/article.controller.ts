import { Controller } from '@nestjs/common'
import { ArticleService } from './article.service'
import { Article } from './article.entity'
import { Crud, CrudController } from '@nestjsx/crud'
import { ApiTags } from '@nestjs/swagger'

@Crud({
  model: {
    type: Article,
  },
  params: {
    authorId: {
      field: 'authorId',
      type: 'number',
    },
  },
})
@ApiTags('articles')
@Controller('/authors/:authorId/articles')
export class ArticleController implements CrudController<Article> {
  constructor(public service: ArticleService) {}
}
