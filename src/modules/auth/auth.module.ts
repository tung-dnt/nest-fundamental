import {Module} from '@nestjs/common'
import {PassportModule} from '@nestjs/passport'
import {JwtModule} from '@nestjs/jwt'
import {UserModule} from 'src/modules/user/user.module'
import {AuthController} from './controllers/auth.controller'
import {AuthService} from './providers/auth.service'
import {AccessTokenStrategy} from './providers/access_token.service'
import {RefreshTokenStrategy} from './providers/refresh_token.strategy'

@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({})
  ],
  controllers: [AuthController],
  providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy]
})
export class AuthModule {
}
