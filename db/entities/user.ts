import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from 'typeorm'
import {Role} from 'types/role'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn() id: number

  @Column({type: 'text'}) name: string

  @Column({unique: true, type: 'text'}) email: string

  @Column({type: 'text'}) password: string

  @Column({
    type: 'smallint',
    default: Role.USER
  })
    role: Role

  @Column({
    nullable: true,
    type: 'text'
  })
    refreshToken: string | null

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