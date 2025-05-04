const router = require('express').Router();
const todo = require('../../../controllers/todos/todos.controller');
const { routesConfig } = require('../../../lib/configs');

const { subPaths } = routesConfig.todos.versions.v1.routes.todo;

router.post(subPaths.addTodo, todo.addTodo);
router.get(subPaths.getAllTodos, todo.getAllTodos)
router.put(subPaths.updateTodo, todo.updateTodo)
router.delete(subPaths.deleteTodo, todo.deleteTodo)
router.get(subPaths.searchByTitle, todo.searchByTitle);
router.put(subPaths.markAsDone, todo.markAsDone);
router.put(subPaths.markAsNotDone, todo.markAsNotDone);
router.get(subPaths.getCompletedTodos, todo.getCompletedTodos);
router.get(subPaths.getIncompletedTodos, todo.getIncompletedTodos)
module.exports = router;