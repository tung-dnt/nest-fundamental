import {DataSource, Repository} from 'typeorm'
import {Injectable} from '@nestjs/common'
import {Todo} from 'db/entities/todo'
import {CreateTodoDto} from './dto/createTodo.dto'
import {UpdateTodoDto} from './dto/updateTodo.dto'

@Injectable()
export class TodoRepository extends Repository<Todo> {
  constructor(private dataSource: DataSource) {
    super(Todo, dataSource.createEntityManager())
  }

  findMany(): Promise<Todo[]> {
    return this.createQueryBuilder().getMany()
  }

  findFirst(query: Partial<CreateTodoDto>): Promise<Todo | null> {
    return this.createQueryBuilder()
      .where({...query})
      .getOne()
  }

  async deleteById(id: number): Promise<void> {
    await this.createQueryBuilder()
      .softDelete()
      .where('id = :id', {id})
      .execute()
  }

  async add(payload: CreateTodoDto): Promise<void> {
    await this.createQueryBuilder()
      .insert()
      .into(Todo)
      .values([payload])
      .execute()
  }

  async updateById(id: number, payload: UpdateTodoDto): Promise<void> {
    await this.createQueryBuilder()
      .update(Todo)
      .set({...payload, updatedAt: new Date()})
      .where('id = :id', {id})
      .execute()
  }
}
