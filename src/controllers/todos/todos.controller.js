// @Dependencies

// @Models
const Todo = require('../../models/mongodb/Todos/todo.model')

// @Helper Functions
const { successResponse, errorResponse } = require('../../utils/helperFunctions');
const {
  errorCode: { DATA_NOT_FOUND },
} = require('../../constants');
// hello
const todo = {};

todo.addTodo = async (req, res, next) => {

  const { title, description } = req.body;

  try {
    if (!title) {
      throw new errorResponse(DATA_NOT_FOUND)
    }
    const newTodo = await Todo.create({
      title,
      description,

    });

    return successResponse({
      res,
      code: 201,
      message: 'Todo created successfully.',
      data: newTodo,
    });
  } catch (e) {
    next(e);
  }
};
todo.getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find().select('title description');
    return successResponse({
      res,
      code: 200,
      message: 'Todos retrieved successfully.',
      data: todos,
    });
  } catch (e) {
    next(e);
  }
};
todo.updateTodo = async (req, res, next) => {
  try {
    const { id } = req.query;
    const { title, description } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    if (!updatedTodo) {
      return errorResponse({
        res,
        code: 404,
        message: 'Todo not found.',
      });
    }
    return successResponse({
      res,
      code: 200,
      message: 'Todo updated successfully.',
      data: updatedTodo,
    });
  } catch (e) {
    next(e);
  }
};
todo.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.query;

    const deleted = await Todo.findByIdAndDelete(id);
    if (!deleted) {
      return errorResponse({
        res,
        code: 404,
        message: 'Todo not found.',
      });
    }

    return successResponse({
      res,
      code: 200,
      message: 'Todo deleted successfully.',
      data: deleted,
    });
  } catch (e) {
    next(e);
  }
};
todo.searchByTitle = async (req, res, next) => {
  try {
    const { title } = req.query;

    if (!title) {
      return errorResponse({
        res,
        code: 400,
        message: 'Title query parameter is required.',
      });
    }

    const todos = await Todo.find({
      title: { $regex: title, $options: 'i' }, // 'i' for case-insensitive
    });

    return successResponse({
      res,
      code: 200,
      message: 'Todos matching title retrieved successfully.',
      data: todos,
    });
  } catch (e) {
    next(e);
  }
};
todo.markAsDone = async (req, res, next) => {
  try {
    const { id } = req.query;

    if (!id) {
      return errorResponse({
        res,
        code: 400,
        message: 'Todo ID is required.',
      });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { completed: true },
      { new: true }
    );

    if (!updatedTodo) {
      return errorResponse({
        res,
        code: 404,
        message: 'Todo not found..',
      });
    }

    return successResponse({
      res,
      code: 200,
      message: 'Todo marked as done successfully.',
      data: updatedTodo,
    });
  } catch (e) {
    next(e);
  }
};


module.exports = todo;
