import {Test, TestingModule} from '@nestjs/testing'
import {DEFAULT_TESTING_MODULES} from 'test/common'
import {UserController} from 'modules/user/controllers/user.controller'
import {UserService} from 'modules/user/providers/user.service'
import {UserRepository} from 'modules/user/repositories/user.repository'

describe('UserController', () => {
  let controller: UserController

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: DEFAULT_TESTING_MODULES,
      controllers: [UserController],
      providers: [UserService, UserRepository]
    }).compile()

    controller = module.get<UserController>(UserController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
