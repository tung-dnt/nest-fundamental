import {Injectable} from '@nestjs/common'
import {Todo} from 'src/db/entities/todo'
import {TodoRepository} from 'src/app/todo/todo.repository'

@Injectable()
export class TodoService {
  constructor(private todoRepository: TodoRepository) {
  }

  findAll(): Promise<Todo[]> {
    return this.todoRepository.firstWhere()
  }

  findOne(id: number): Promise<Todo | null> {
    return this.todoRepository.findOneBy({id})
  }

  async remove(id: string): Promise<void> {
    await this.todoRepository.delete(id)
  }
}
