import {Test, TestingModule} from '@nestjs/testing'
import {PassportModule} from '@nestjs/passport'
import {DEFAULT_TESTING_MODULES} from 'test/common'
import {TodoController} from 'modules/todo/controllers/todo.controller'
import {TodoService} from 'modules/todo/providers/todo.service'
import {TodoRepository} from 'modules/todo/repositories/todo.repository'
import {UserRepository} from 'modules/user/repositories/user.repository'

describe('TodoController', () => {
  let controller: TodoController

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...DEFAULT_TESTING_MODULES, PassportModule],
      controllers: [TodoController],
      providers: [TodoService, TodoRepository, UserRepository],
    }).compile()

    controller = module.get<TodoController>(TodoController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
