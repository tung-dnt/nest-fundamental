import {Body, Controller, Delete, Req, Post, UseGuards, Get} from '@nestjs/common'
import {CreateUserDto, LoginUserDto} from 'modules/user/dto/user.dto'
import {AccessJwtAuthGuard} from 'middlewares/access_token.guard'
import {RefreshJwtAuthGuard} from 'middlewares/refresh_token.guard'
import {AuthResponse} from 'modules/auth/interfaces/auth'
import {AuthService} from 'modules/auth/providers/auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<AuthResponse> {
    return this.authService.signUp(createUserDto)
  }

  @Post('login')
  async login(@Body() loginDto: LoginUserDto): Promise<AuthResponse> {
    return this.authService.signIn(loginDto)
  }

  @UseGuards(AccessJwtAuthGuard)
  @Delete('logout')
  async logout(@Req() req: any): Promise<string> {
    const {id} = req.user
    await this.authService.logout(Number(id))
    return 'Logged out !!!'
  }

  @UseGuards(RefreshJwtAuthGuard)
  @Get('refresh')
  refreshTokens(@Req() req: any) {
    const {email, refreshToken} = req.user
    return this.authService.refreshTokens(email, refreshToken)
  }
}
