const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});
    console.log(todos, "55");
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire todo data is fetched",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "somthing want wrong in server",
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    //extract item todo basis od id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    // if given dataTodo is not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "data not fount by given id",
      });
    }

    //if data found by given id
    res.status(200).json({
      success: true,
      data: todo,
      message: `data is fount by given id ${id}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "somthing want wrong in server",
    });
  }
};
