const { Schema, model } = require('mongoose');

// Define User schema
exports.Todo = model(
  'Todo',
  new Schema(
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },
      description: {
        type: String,
        trim: true,
      },
      completed: {
        type: Boolean,
        default: false,
      }
      , priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium',
      },
    },

    {
      timestamps: true,
    }
  )
);
