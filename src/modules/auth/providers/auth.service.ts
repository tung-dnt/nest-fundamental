import {ForbiddenException, Injectable} from '@nestjs/common'
import {JwtService} from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import {User} from 'db/entities/user'
import {AuthResponse} from 'src/modules/auth/interfaces/auth'
import {UserService} from 'src/modules/user/providers/user.service'
import {CreateUserDto, LoginUserDto} from 'src/modules/user/dto/user.dto'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {
  }

  async signUp(createUserDto: CreateUserDto): Promise<AuthResponse> {
    const newUser = await this.userService.create(createUserDto)
    const tokens = await this.getTokens(newUser.id, newUser.email)
    await this.updateRefreshToken(newUser.id, tokens.refreshToken)
    return {
      ...tokens,
      email: newUser.email
    }
  }

  async signIn(data: LoginUserDto): Promise<AuthResponse> {
    const user = await this.userService.findByLogin(data)
    const tokens = await this.getTokens(user.id, user.email)
    await this.updateRefreshToken(user.id, tokens.refreshToken)
    return {
      ...tokens,
      email: user.email
    }
  }

  async logout(userId: number) {
    return this.userService.updateUserRefreshToken(userId, null)
  }

  async updateRefreshToken(userId: number, refreshToken: string) {
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10)
    await this.userService.updateUserRefreshToken(userId, hashedRefreshToken)
  }

  async refreshTokens(email: string, refreshToken: string) {
    const user = await this.userService.findByEmail(email)
    if (!user || !user.refreshToken) {
      throw new ForbiddenException('Access Denied')
    }
    const refreshTokenMatches = bcrypt.compareSync(refreshToken, user.refreshToken)
    if (!refreshTokenMatches) throw new ForbiddenException('Access Denied')
    const tokens = await this.getTokens(user.id, user.email)
    await this.updateRefreshToken(user.id, tokens.refreshToken)
    return tokens
  }

  async getTokens(userId: number, email: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: process.env.ACCESS_TOKEN_STRATEGY,
          expiresIn: Number(process.env.ACCESS_EXPIRE),
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: process.env.REFRESH_TOKEN_STRATEGY,
          expiresIn: Number(process.env.REFRESH_EXPIRE),
        },
      ),
    ])
    return {
      accessToken,
      refreshToken,
    }
  }

  async validateUser(email: string): Promise<User> {
    return this.userService.findByEmail(email)
  }
}
