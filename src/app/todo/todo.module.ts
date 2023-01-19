import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Todo} from 'src/db/entities/todo'
import {TodoController} from 'src/app/todo/todo.controller'
import {TodoService} from 'src/app/todo/todo.service'
import {TodoRepository} from 'src/app/todo/todo.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [TodoService, TodoRepository],
})
export class TodoModule {
}