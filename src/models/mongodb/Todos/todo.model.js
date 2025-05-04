const {
  Todo: TodoSchema,
} = require('../../../schemas/mongoDB/Todos/todo.schema')


class Todo extends TodoSchema {}

module.exports = Todo;