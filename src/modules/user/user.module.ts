import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {PassportModule} from '@nestjs/passport'
import {JwtModule} from '@nestjs/jwt'
import {User} from 'db/entities/user'
import {UserRepository} from './repositories/user.repository'
import {UserController} from './controllers/user.controller'
import {UserService} from './services/user.service'
import {AuthService} from './services/auth.service'
import {JwtStrategy} from './services/jwt.strategy'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false
    }),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: {expiresIn: Number(process.env.EXPIRE)}
    })
  ],
  controllers: [UserController],
  providers: [UserService, AuthService, UserRepository, JwtStrategy]
})
export class UserModule {
}
