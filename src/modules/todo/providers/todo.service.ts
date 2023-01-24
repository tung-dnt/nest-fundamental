import {Injectable} from '@nestjs/common'
import {Todo} from 'db/entities/todo'
import {ManipulateResponse} from 'types/common'
import {TodoRepository} from 'modules/todo/repositories/todo.repository'
import {CreateTodoDto} from 'modules/todo/dto/createTodo.dto'
import {UpdateTodoDto} from 'modules/todo/dto/updateTodo.dto'
import {QueryTodoDto} from 'modules/todo/dto/queryTodo.dto'

@Injectable()
export class TodoService {
  constructor(private todoRepository: TodoRepository) {
  }

  getAll(): Promise<Todo[]> {
    return this.todoRepository.findMany()
  }

  getFirst(payload: Partial<QueryTodoDto>): Promise<Todo | null> {
    return this.todoRepository.findFirst(payload)
  }

  async removeById(id: number): Promise<ManipulateResponse> {
    await this.todoRepository.deleteById(id)
    return {success: true}
  }

  async create(payload: CreateTodoDto): Promise<ManipulateResponse> {
    await this.todoRepository.add(payload)
    return {success: true}
  }

  async update(id: number, payload: UpdateTodoDto): Promise<ManipulateResponse> {
    await this.todoRepository.updateById(id, payload)
    return {success: true}
  }
}
