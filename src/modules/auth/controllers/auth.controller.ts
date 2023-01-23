import {Body, Controller, Post} from '@nestjs/common'
import {CreateUserDto, LoginUserDto} from 'src/modules/user/dto/user.dto'
import {AuthResponse} from '../interfaces/auth'
import {AuthService} from '../providers/auth.service'

@Controller('auth')
export class AuthController {
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
