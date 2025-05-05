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
      priority: Joi.string().valid('low', 'medium', 'high'),
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
      description: Joi.string().required(),
      priority: Joi.string().valid('low', 'medium', 'high')
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
  },
  [[
    baseURL,
    todos.path,
    v1.path,
    v1.routes.todo.path,
    v1.routes.todo.subPaths.getIncompletedTodos,
  ].join('')]: {
    [GET]: Joi.object({}),
  }
  ,
  [[
    baseURL,
    todos.path,
    v1.path,
    v1.routes.todo.path,
    v1.routes.todo.subPaths.deleteAllTodos,
  ].join('')]: {
    [DELETE]: Joi.object({}),
  }
  , [[
    baseURL,
    todos.path,
    v1.path,
    v1.routes.todo.path,
    v1.routes.todo.subPaths.getTodosCreatedAfter,
  ].join('')]: {
    [GET]: Joi.object({
      date: Joi.date().required()
    }),
  },
  [[
    baseURL,
    todos.path,
    v1.path,
    v1.routes.todo.path,
    v1.routes.todo.subPaths.getTodosByPriority,
  ].join('')]: {
    [GET]: Joi.object({
      priority: Joi.string().valid('low', 'medium', 'high', 'high,low', 'low,high', 'low,medium', 'medium,low', 'medium,high', 'high,medium'),
    }),
  },

};
