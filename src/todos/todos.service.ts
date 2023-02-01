import { Injectable } from '@nestjs/common'
import { getTodos, putTodo } from 'src/db/repositories/todos'
import { v4 as uuid } from 'uuid'

@Injectable()
export class TodosService {
  getTodos() {
    return getTodos()
  }
  InsertTodo(title: string, description: string) {
    const uid = uuid()
    putTodo({ uid, title, description })
    return uid
  }
}
