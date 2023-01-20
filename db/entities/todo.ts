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
    name: 'created_at',
    default: `now()`,
  })
    createdAt: Date

  @UpdateDateColumn({
    name: 'updated_at',
    default: `now()`,
  })
    updatedAt: Date

  @DeleteDateColumn({
    name: 'deleted_at',
    nullable: true
  })
    deletedAt: Date
}