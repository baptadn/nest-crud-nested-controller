import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Article } from '../article/article.entity'
import { ApiProperty } from '@nestjs/swagger'

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column({
    nullable: true,
  })
  avatarURL: string

  @ApiProperty({ type: () => Article })
  @OneToMany(
    () => Article,
    article => article.author,
  )
  articles: Article[]
}
