const { user, profile, todos } = require('../validations/schemas');

exports.validationSchemas = {
  ...user,
  ...profile,
  ...todos,
};
