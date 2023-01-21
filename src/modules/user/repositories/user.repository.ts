import {Injectable} from '@nestjs/common'
import {DataSource, Repository} from 'typeorm'
import {User} from 'db/entities/user'
import {CreateUserDto} from '../dto/user.dto'

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager())
  }

  async add(payload: CreateUserDto): Promise<void> {
    await this.createQueryBuilder()
      .insert()
      .into(User)
      .values([payload])
      .execute()
  }
}