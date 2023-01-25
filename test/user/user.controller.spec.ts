import {Test, TestingModule} from '@nestjs/testing'
import {UserController} from 'modules/user/controllers/user.controller'
import {UserService} from 'modules/user/providers/user.service'
import {UserRepository} from 'modules/user/repositories/user.repository'

describe('UserController', () => {
  let controller: UserController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, UserRepository]
    }).compile()

    controller = module.get<UserController>(UserController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
