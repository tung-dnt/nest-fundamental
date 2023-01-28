import {Test, TestingModule} from '@nestjs/testing'
import {DEFAULT_TESTING_MODULES} from 'test/common'
import {UserService} from 'modules/user/providers/user.service'
import {UserController} from 'modules/user/controllers/user.controller'
import {UserRepository} from 'modules/user/repositories/user.repository'

describe('UserService', () => {
  let service: UserService

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: DEFAULT_TESTING_MODULES,
      controllers: [UserController],
      providers: [UserService, UserRepository]
    }).compile()

    service = module.get<UserService>(UserService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
