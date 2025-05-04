const Joi = require('joi');
const { routesConfig } = require('../../../lib/configs');
const { baseURL, app, methods } = routesConfig;
const { v1 } = app.versions;
const { GET, POST, PUT, DELETE } = methods; // eslint-disable-line

exports.profile = {
  [[
    baseURL,
    app.path,
    v1.path,
    v1.routes.profile.path,
    v1.routes.profile.subPaths.root,
  ].join('')]: {
    [GET]: Joi.object({}),
  },
};
