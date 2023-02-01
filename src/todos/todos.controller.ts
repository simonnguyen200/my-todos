import { Body, Controller, Get, Post } from '@nestjs/common'
import { TodosService } from './todos.service'

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) { }

  @Get()
  getTodos() {
    return this.todosService.getTodos()
  }

  @Post()
  postTodo(@Body('title') title: string, @Body('description') description: string) {
    const todoId = this.todosService.InsertTodo(title, description)
    return { id: todoId }
  }
}
