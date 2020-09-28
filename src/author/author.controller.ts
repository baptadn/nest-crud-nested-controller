import { Controller } from '@nestjs/common'
import { AuthorService } from './author.service'
import { Author } from './author.entity'
import { Crud, CrudController } from '@nestjsx/crud'
import { ApiTags } from '@nestjs/swagger'

@Crud({
  model: {
    type: Author,
  },
})
@ApiTags('authors')
@Controller('authors')
export class AuthorController implements CrudController<Author> {
  constructor(public service: AuthorService) {}
}
