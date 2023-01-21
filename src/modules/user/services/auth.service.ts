import {Injectable} from '@nestjs/common'
import {JwtService} from '@nestjs/jwt'
import {User} from 'db/entities/user'
import {UserService} from './user.service'
import {CreateUserDto, LoginUserDto} from '../dto/user.dto'
import {AuthResponse} from '../interfaces/auth'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {
  }

  async register(userDto: CreateUserDto): Promise<AuthResponse> {
    const user = await this.userService.create(userDto)
    const token = this._createToken(user)
    return {
      email: userDto.email,
      token
    }
  }

  async login(userDto: LoginUserDto): Promise<AuthResponse> {
    const user = await this.userService.findByLogin(userDto)
    const token = this._createToken(user)
    return {
      email: user.email,
      token
    }
  }

  async validateUser(email: string): Promise<User> {
    return this.userService.findByEmail(email)
  }

  _createToken({email}: any): string {
    return this.jwtService.sign(
      {email},
      {
        secret: process.env.SECRET_KEY,
        expiresIn: Number(process.env.EXPIRE)
      }
    )
  }
}
