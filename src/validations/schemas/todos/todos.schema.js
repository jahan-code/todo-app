const Joi = require('joi');

const { routesConfig } = require('../../../lib/configs');
const { baseURL, todos, methods } = routesConfig;
const { v1 } = todos.versions;
const { GET, POST, PUT, DELETE } = methods;

exports.todos = {
  [[
    baseURL,
    todos.path,
    v1.path,
    v1.routes.todo.path,
    v1.routes.todo.subPaths.addTodo,
  ].join('')]: {
    [POST]: Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      completed: Joi.boolean().required(),
    }),
  },
  [[
    baseURL,
    todos.path,
    v1.path,
    v1.routes.todo.path,
    v1.routes.todo.subPaths.getAllTodos,
  ].join('')]: {
    [GET]: Joi.object({}),
  },
  [[
    baseURL,
    todos.path,
    v1.path,
    v1.routes.todo.path,
    v1.routes.todo.subPaths.updateTodo,
  ].join('')]: {
    [PUT]: Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required()

    }),
  },

  [[
    baseURL,
    todos.path,
    v1.path,
    v1.routes.todo.path,
    v1.routes.todo.subPaths.deleteTodo,
  ].join('')]: {
    [DELETE]: Joi.object({
      id: Joi.string().required(),
    }),
  },
  [[
    baseURL,
    todos.path,
    v1.path,
    v1.routes.todo.path,
    v1.routes.todo.subPaths.searchByTitle,
  ].join('')]: {
    [GET]: Joi.object({
      title: Joi.string().required(),
    }),
  },
  [[
    baseURL,
    todos.path,
    v1.path,
    v1.routes.todo.path,
    v1.routes.todo.subPaths.markAsDone,
  ].join('')]: {
    [PUT]: Joi.object({

    }),
  },
  [[
    baseURL,
    todos.path,
    v1.path,
    v1.routes.todo.path,
    v1.routes.todo.subPaths.markAsNotDone,
  ].join('')]: {
    [PUT]: Joi.object({

    }),
  },
  [[
    baseURL,
    todos.path,
    v1.path,
    v1.routes.todo.path,
    v1.routes.todo.subPaths.getCompletedTodos,
  ].join('')]: {
    [GET]: Joi.object({}),
  }

};
