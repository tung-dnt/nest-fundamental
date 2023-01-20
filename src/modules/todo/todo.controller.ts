import {Controller, Get, Post, Delete, Patch, Param, Body} from '@nestjs/common'
import {Todo} from 'db/entities/todo'
import {ManipulateResponse} from 'src/types/common'
import {TodoService} from 'src/modules/todo/todo.service'
import {CreateTodoDto} from './dto/createTodo.dto'
import {UpdateTodoDto} from './dto/updateTodo.dto'

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {
  }

  @Get()
  async getAllTodos(): Promise<Todo[]> {
    return this.todoService.getAll()
  }

  @Get(':id')
  async getTodo(@Param('id') id: string): Promise<Todo | null> {
    return this.todoService.getFirst({id: Number(id)})
  }

  // TODO: DTO validation
  @Post()
  async createTodo(@Body() body: CreateTodoDto): Promise<ManipulateResponse> {
    await this.todoService.create(body)
    return {success: true}
  }

  // TODO: DTO validation
  @Patch()
  async updateTodo(
    @Param('id') id: string,
    @Body() body: UpdateTodoDto
  ): Promise<ManipulateResponse> {
    await this.todoService.update(Number(id), body)
    return {success: true}
  }

  @Delete(':id')
  async deleteTodoById(@Param('id') id: string): Promise<ManipulateResponse> {
    await this.todoService.removeById(Number(id))
    return {success: true}
  }
}
