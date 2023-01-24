import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {PassportModule} from '@nestjs/passport'
import {Todo} from 'db/entities/todo'
import {TodoController} from 'modules/todo/controllers/todo.controller'
import {TodoService} from 'modules/todo/providers/todo.service'
import {TodoRepository} from 'modules/todo/repositories/todo.repository'
import {UserRepository} from 'modules/user/repositories/user.repository'

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