import {IsInt, IsOptional, Length, Max, Min} from 'class-validator'
import {TodoStatus} from 'modules/todo/interfaces/todo'

export class UpdateTodoDto {
  @Length(1, 100)
    title: string

  @IsOptional()
    note: string

  @IsInt()
  @Min(1)
  @Max(3)
    status: TodoStatus
}