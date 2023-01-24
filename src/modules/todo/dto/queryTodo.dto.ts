import {IsInt, Min, Max, IsOptional} from 'class-validator'
import {TodoStatus} from 'modules/todo/interfaces/todo'

export class QueryTodoDto {
  @IsOptional()
  @IsInt()
    id: number

  @IsOptional()
    title: string

  @IsOptional()
    note: string

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(3)
    status: TodoStatus
}