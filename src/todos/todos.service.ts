import { Injectable } from '@nestjs/common'
import Todo from './todos.model'

@Injectable()
export class TodosService {
  getTodos(): string {
    return 'Hello World!'
  }
  InsertTodo(todo: Todo): string {
    return 'Hello World!'
  }
}
