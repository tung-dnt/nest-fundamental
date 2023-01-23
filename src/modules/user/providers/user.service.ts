import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import {User} from 'db/entities/user'
import {CreateUserDto, LoginUserDto} from '../dto/user.dto'
import {UserRepository} from '../repositories/user.repository'

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {
  }

  async create(userDto: CreateUserDto): Promise<User> {
    userDto.password = await bcrypt.hash(userDto.password, 10)

    const existedUser = await this.userRepository.findOneBy({email: userDto.email})
    if (existedUser) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST)
    }
    return this.userRepository.save(userDto)
  }

  async findByLogin(userDto: LoginUserDto): Promise<User> {
    const user = await this.findByEmail(userDto.email)
    const isPasswordMatched = bcrypt.compareSync(userDto.password, user.password)

    if (!isPasswordMatched) {
      throw new UnauthorizedException()
    }
    return user
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOneBy({email})
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }

  async updateUserRefreshToken(userId: number, refreshToken: string | null): Promise<void> {
    await this.userRepository.update({id: userId}, {refreshToken})
  }
}
