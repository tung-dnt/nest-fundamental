import {applyDecorators, SetMetadata, UseGuards} from '@nestjs/common'
import {AuthGuard} from '@nestjs/passport'
import {Role} from 'types/role'
import {AccessJwtAuthGuard} from 'middlewares/access_token.guard'

export function Auth(...roles: Role[]) {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(AccessJwtAuthGuard, AuthGuard),
  )
}