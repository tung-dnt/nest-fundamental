import {Test, TestingModule} from '@nestjs/testing'
import {PassportModule} from '@nestjs/passport'
import {JwtModule} from '@nestjs/jwt'
import {DEFAULT_TESTING_MODULES} from 'test/common'
import {AuthService} from 'modules/auth/providers/auth.service'
import {UserModule} from 'modules/user/user.module'
import {AuthController} from 'modules/auth/controllers/auth.controller'
import {AccessTokenStrategy} from 'modules/auth/providers/access_token.service'
import {RefreshTokenStrategy} from 'modules/auth/providers/refresh_token.strategy'

describe('AuthService', () => {
  let service: AuthService

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

    service = module.get<AuthService>(AuthService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
