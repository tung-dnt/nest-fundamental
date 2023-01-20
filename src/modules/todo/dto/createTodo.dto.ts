import {TodoStatus} from 'src/modules/todo/interfaces/todo'

export class CreateTodoDto {
  id?: number
  title: string
  note?: string
  status: TodoStatus
}