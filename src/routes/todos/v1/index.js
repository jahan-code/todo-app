const router = require('express').Router();
const todo = require('./todos.route')
const { routesConfig } = require('../../../lib/configs');
const { routes } = routesConfig.todos.versions.v1;
router.use(routes.todo.path, todo);

module.exports = router;