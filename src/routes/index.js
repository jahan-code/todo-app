const router = require('express').Router();

const app = require('./app');
const auth = require('./auth');
const todos=require('./todos')
const { routesConfig } = require('../lib/configs');

const { authorization, authentication } = require('../middlewares');

router.use(routesConfig.app.path, authentication, authorization, app);
router.use(routesConfig.auth.path, auth);
router.use(routesConfig.todos.path,authentication,authorization,todos)

module.exports = router;
