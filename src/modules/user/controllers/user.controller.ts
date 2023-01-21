import {Body, Controller, Post} from '@nestjs/common'
import {AuthService} from '../services/auth.service'
import {CreateUserDto, LoginUserDto} from '../dto/user.dto'
import {AuthResponse} from '../interfaces/auth'

@Controller('user')
export class UserController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<AuthResponse> {
    return this.authService.register(createUserDto)
  }

  @Post('login')
  async login(@Body() loginDto: LoginUserDto): Promise<AuthResponse> {
    return this.authService.login(loginDto)
  }
}
