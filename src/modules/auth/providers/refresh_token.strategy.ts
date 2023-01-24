import {Injectable, UnauthorizedException} from '@nestjs/common'
import {PassportStrategy} from '@nestjs/passport'
import {ExtractJwt, Strategy} from 'passport-jwt'
import {User} from 'db/entities/user'
import {AuthService} from 'modules/auth/providers/auth.service'

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.ACCESS_TOKEN_STRATEGY,
      passReqToCallback: true,
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