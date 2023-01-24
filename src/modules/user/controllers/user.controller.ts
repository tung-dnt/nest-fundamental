import {Controller} from '@nestjs/common'
import {UserService} from 'modules/user/providers/user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }
}
