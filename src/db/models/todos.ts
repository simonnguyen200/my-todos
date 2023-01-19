import { CreateTableCommand, CreateTableInput } from '@aws-sdk/client-dynamodb'
import client from '../client'

const todoTableParams: CreateTableInput = {
  TableName: 'Todos',
  KeySchema: [
    { AttributeName: 'UId', KeyType: 'HASH' },
    { AttributeName: 'Title', KeyType: 'RANGE' },
  ],
  AttributeDefinitions: [
    { AttributeName: 'UId', AttributeType: 'S' },
    { AttributeName: 'Title', AttributeType: 'S' },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
}

const command = new CreateTableCommand(todoTableParams)

client
  .send(command)
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })
