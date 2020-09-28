import { Controller } from '@nestjs/common'
import { ArticleService } from './article.service'
import { Article } from './article.entity'
import { Crud } from '@nestjsx/crud'
import { ApiTags } from '@nestjs/swagger'

@Crud({
  model: {
    type: Article,
  },
  params: {
    id: {
      field: 'author',
      type: 'number',
    },
  },
})
@ApiTags('articles')
@Controller('/authors/:id/articles')
export class ArticleController {
  constructor(public service: ArticleService) {}
}
