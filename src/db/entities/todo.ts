import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from 'typeorm'
import {TodoStatus} from 'src/app/todo/interfaces/todo'

@Entity({name: 'todos'})
export class Todo {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    title: string

  @Column()
    note: string

  @Column()
    status: TodoStatus

  @CreateDateColumn({
    default: `now()`,
  })
    createdAt: string

  @UpdateDateColumn({
    default: `now()`,
  })
    updatedAt: string

  @DeleteDateColumn({
    nullable: true
  })
    deletedAt: string
}