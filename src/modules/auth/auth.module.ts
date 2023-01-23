import {Module} from '@nestjs/common'
import {PassportModule} from '@nestjs/passport'
import {JwtModule} from '@nestjs/jwt'
import {UserModule} from 'src/modules/user/user.module'
import {AuthController} from './controllers/auth.controller'
import {AuthService} from './providers/auth.service'
import {JwtStrategy} from './providers/jwt.strategy'

@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({
      secret: process.env.ACCESS_TOKEN_STRATEGY,
      signOptions: {expiresIn: Number(process.env.EXPIRE)}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {
}
