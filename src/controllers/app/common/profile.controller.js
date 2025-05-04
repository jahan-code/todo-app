// @Dependencies

// @Models
const UserModel = require('../../../models/mongodb/auth/User.model');

// @Helper Functions

const { successResponse, errorResponse } = require('../../../utils/helperFunctions');
const {
  errorCode: { USER_NOT_FOUND },
} = require('../../../constants');


// hello
const profile = {};

profile.get = async (req, res, next) => {
  // let {  } = req.query;
  const { userID } = res.auth;

  console.log(userID, 'here is the userid');


  try {
    return successResponse({
      res,
      code: 200,
      message: 'User profile get succeed.',
      data: user,
    });
  } catch (e) {
    next(e);
  }
};
module.exports = profile;
