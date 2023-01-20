import {TodoStatus} from 'src/modules/todo/interfaces/todo'
import {IsInt, IsOptional, Length, Max, Min} from 'class-validator'

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