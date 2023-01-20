import {TodoStatus} from 'src/modules/todo/interfaces/todo'

export class UpdateTodoDto {
  title: string
  note?: string
  status: TodoStatus
}