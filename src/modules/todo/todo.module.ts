import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Todo} from 'db/entities/todo'
import {TodoController} from 'src/modules/todo/todo.controller'
import {TodoService} from 'src/modules/todo/todo.service'
import {TodoRepository} from 'src/modules/todo/todo.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [TodoService, TodoRepository],
})
export class TodoModule {
}