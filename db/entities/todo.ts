import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from 'typeorm'
import {TodoStatus} from 'modules/todo/interfaces/todo'

@Entity({name: 'todos'})
export class Todo {
  @PrimaryGeneratedColumn()
    id: number

  @Column({type: 'text'})
    title: string

  @Column({type: 'text', nullable: true})
    note: string

  @Column({type: 'smallint'})
    status: TodoStatus

  @CreateDateColumn({
    name: 'created_at',
    default: `now()`,
    type: 'date'
  })
    createdAt: Date

  @UpdateDateColumn({
    name: 'updated_at',
    default: `now()`,
    type: 'date'
  })
    updatedAt: Date

  @DeleteDateColumn({
    name: 'deleted_at',
    nullable: true,
    type: 'date'
  })
    deletedAt: Date
}