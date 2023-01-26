import {applyDecorators, SetMetadata, UseGuards} from '@nestjs/common'
import {Role} from 'types/role'
import {AccessJwtAuthGuard} from 'middlewares/access_token.guard'
import {RolesGuard} from 'middlewares/role.guard'

export function Auth(...roles: Role[]) {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(AccessJwtAuthGuard, RolesGuard),
  )
}