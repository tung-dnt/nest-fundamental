import {DataSource, Repository} from 'typeorm'
import {Injectable} from '@nestjs/common'
import {Todo} from 'src/db/entities/todo'

@Injectable()
export class TodoRepository extends Repository<Todo> {
  constructor(private dataSource: DataSource) {
    super(Todo, dataSource.createEntityManager())
  }

  async firstWhere(): Promise<Todo[]> {
    return await this.createQueryBuilder()
      .where({deletedAt: null})
      .getMany()
  }
}
