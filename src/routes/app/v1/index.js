const router = require('express').Router();

// common routes
const profile = require('./common/profile.route');

const { routesConfig } = require('../../../lib/configs');

const { routes } = routesConfig.app.versions.v1;

// common routes
router.use(routes.profile.path, profile);

module.exports = router;
