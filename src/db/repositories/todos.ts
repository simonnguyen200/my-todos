import { PutCommand, PutCommandInput, ScanCommand, ScanCommandInput } from '@aws-sdk/lib-dynamodb'
import Todo from 'src/todos/todos.model'
import client from '../client'

export const getTodos = async () => {
  const params: ScanCommandInput = {
    TableName: 'Todos',
  }
  const command = new ScanCommand(params)

  return await client.send(command)
}

export const putTodo = async (todo: Todo) => {
  const params: PutCommandInput = {
    TableName: 'Todos',
    Item: {
      UId: todo.uid,
      Title: todo.title,
      Description: todo.description,
    },
  }
  const command = new PutCommand(params)
  return client.send(command)
}
