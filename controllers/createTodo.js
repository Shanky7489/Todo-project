// import the model

const Todo = require("../models/Todo");

// define route handler

exports.createTodo = async (req, res) => {
  try {
    //extract title and description from reqest body
    const { title, description } = req.body;

    //insert (create) data inside the todo
    const response = await Todo.create({ title, description });

    //send json response with a successfull flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry created successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "enternal error",
      message: err.message,
    });
  }
};
