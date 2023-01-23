import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {PassportModule} from '@nestjs/passport'
import {Todo} from 'db/entities/todo'
import {TodoController} from './controllers/todo.controller'
import {TodoService} from './providers/todo.service'
import {TodoRepository} from './repositories/todo.repository'
import {UserRepository} from '../user/repositories/user.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([Todo]),
    PassportModule
  ],
  controllers: [TodoController],
  providers: [TodoService, TodoRepository, UserRepository],
})
export class TodoModule {
}