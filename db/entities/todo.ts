import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from 'typeorm'
import {TodoStatus} from 'src/modules/todo/interfaces/todo'

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
    createdAt: Date

  @UpdateDateColumn({
    default: `now()`,
  })
    updatedAt: Date

  @DeleteDateColumn({
    nullable: true
  })
    deletedAt: Date
}