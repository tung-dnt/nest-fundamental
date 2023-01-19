import {Controller, Get} from '@nestjs/common'
import {TodoService} from 'src/app/todo/todo.service'
import {Todo} from 'src/db/entities/todo'

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {
  }

  @Get()
  async getAllTodos(): Promise<Todo[]> {
    return this.todoService.findAll()
  }
}
