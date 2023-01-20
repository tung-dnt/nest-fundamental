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