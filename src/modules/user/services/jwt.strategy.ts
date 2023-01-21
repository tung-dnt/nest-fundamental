import {Injectable, UnauthorizedException} from '@nestjs/common'
import {PassportStrategy} from '@nestjs/passport'
import {ExtractJwt, Strategy} from 'passport-jwt'
import {User} from 'db/entities/user'
import {AuthService} from './auth.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_KEY
    })
  }

  async validate({email}: any): Promise<User> {
    const user = await this.authService.validateUser(email)
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}