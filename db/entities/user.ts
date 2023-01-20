import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    name: string

  @Column()
    email: string

  @Column()
    password: string

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