import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
  Body,
  ParseIntPipe,
  HttpCode,
  UseGuards,
} from '@nestjs/common'
import {Todo} from 'db/entities/todo'
import {ManipulateResponse} from 'src/types/common'
import {JwtAuthGuard} from 'src/middlewares/auth.guard'
import {TodoService} from '../providers/todo.service'
import {CreateTodoDto} from '../dto/createTodo.dto'
import {UpdateTodoDto} from '../dto/updateTodo.dto'

@Controller('todos')
@UseGuards(JwtAuthGuard)
export class TodoController {
  constructor(private readonly todoService: TodoService) {
  }

  @Get()
  async getAllTodos(): Promise<Todo[]> {
    return this.todoService.getAll()
  }

  @Get(':id')
  async getTodo(@Param('id', ParseIntPipe) id: number): Promise<Todo | null> {
    return this.todoService.getFirst({id})
  }

  @Post()
  @HttpCode(201)
  async createTodo(@Body() body: CreateTodoDto): Promise<ManipulateResponse> {
    await this.todoService.create(body)
    return {success: true}
  }

  @Patch(':id')
  async updateTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateTodoDto
  ): Promise<ManipulateResponse> {
    await this.todoService.update(id, body)
    return {success: true}
  }

  @Delete(':id')
  async deleteTodoById(@Param('id', ParseIntPipe) id: number): Promise<ManipulateResponse> {
    await this.todoService.removeById(id)
    return {success: true}
  }
}
