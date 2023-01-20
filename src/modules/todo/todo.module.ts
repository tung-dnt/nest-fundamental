import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Todo} from 'db/entities/todo'
import {TodoController} from './todo.controller'
import {TodoService} from './todo.service'
import {TodoRepository} from './todo.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [TodoService, TodoRepository],
})
export class TodoModule {
}