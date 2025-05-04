//  auth validation schemas
const { user } = require('./auth/user.schema');

// commom validation schemas
const { profile } = require('./common/profile.schema');

//todos validataion schemas
const { todos } = require('./todos/todos.schema');

module.exports = {
  user,
  profile,
  todos
};
