import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {User} from 'db/entities/user'
import {UserRepository} from './repositories/user.repository'
import {UserController} from './controllers/user.controller'
import {UserService} from './providers/user.service'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService]
})
export class UserModule {
}
