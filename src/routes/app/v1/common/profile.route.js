const router = require('express').Router();
const { routesConfig } = require('../../../../lib/configs');

const { subPaths } = routesConfig.app.versions.v1.routes.profile;
const {
  get,
} = require('../../../../controllers/app/common/profile.controller');

router.get(subPaths.root, get);

module.exports = router;
