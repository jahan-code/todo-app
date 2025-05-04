const { Schema, model } = require('mongoose');

// Define User schema
exports.User = model(
  'user',
  new Schema(
    {
      userID: {
        type: String,
      },
      firstName: {
        type: String,
        default: null,
      },
      lastName: {
        type: String,
        default: null,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
      },
    },
    {
      timestamps: true, // Adds createdAt and updatedAt fields to the User schema
    }
  )
);
