import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Author } from '../author/author.entity'
import { ApiProperty } from '@nestjs/swagger'

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  content: string

  @ApiProperty({ type: () => Author })
  @ManyToOne(
    () => Author,
    author => author.articles,
  )
  author: Author

  @Column()
  authorId: number
}
