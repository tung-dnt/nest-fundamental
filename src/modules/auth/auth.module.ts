import {Module} from '@nestjs/common'
import {PassportModule} from '@nestjs/passport'
import {JwtModule} from '@nestjs/jwt'
import {UserModule} from 'modules/user/user.module'
import {AuthController} from 'modules/auth/controllers/auth.controller'
import {AuthService} from 'modules/auth/providers/auth.service'
import {AccessTokenStrategy} from 'modules/auth/providers/access_token.service'
import {RefreshTokenStrategy} from 'modules/auth/providers/refresh_token.strategy'

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
