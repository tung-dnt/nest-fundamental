import {IsEmail, IsNotEmpty} from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty() @IsEmail() email: string
  @IsNotEmpty() name: string
  @IsNotEmpty() password: string
}

export class LoginUserDto {
  @IsEmail() email: string
  @IsNotEmpty() password: string
}