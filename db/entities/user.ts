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
  @PrimaryGeneratedColumn() id: number

  @Column({type: 'text'}) name: string

  @Column({unique: true, type: 'text'}) email: string

  @Column({type: 'text'}) password: string

  @Column({
    nullable: true,
    type: 'text'
  })
    refreshToken: string | null

  @CreateDateColumn({
    name: 'created_at',
    default: `now()`,
    type: 'datetime'
  })
    createdAt: Date

  @UpdateDateColumn({
    name: 'updated_at',
    default: `now()`,
    type: 'datetime'
  })
    updatedAt: Date

  @DeleteDateColumn({
    name: 'deleted_at',
    nullable: true,
    type: 'datetime'
  })
    deletedAt: Date
}