import {Test, TestingModule} from '@nestjs/testing'
import {PassportModule} from '@nestjs/passport'
import {JwtModule} from '@nestjs/jwt'
import {DEFAULT_TESTING_MODULES} from 'test/common'
import {AuthController} from 'modules/auth/controllers/auth.controller'
import {AuthService} from 'modules/auth/providers/auth.service'
import {AccessTokenStrategy} from 'modules/auth/providers/access_token.service'
import {RefreshTokenStrategy} from 'modules/auth/providers/refresh_token.strategy'
import {UserModule} from 'modules/user/user.module'

describe('AuthController', () => {
  let controller: AuthController

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ...DEFAULT_TESTING_MODULES,
        JwtModule.register({}),
        PassportModule,
        UserModule
      ],
      controllers: [AuthController],
      providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy]
    }).compile()

    controller = module.get<AuthController>(AuthController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
