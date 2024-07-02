const express = require("express");
// const { createTodo } = require("./controllers/createTodo");
const app = express();

//load config from .env
require("dotenv").config();

const PORT = process.env.PORT || 3000;
//middleware to parsejson request body
app.use(express.json());

//import route for TODO route
const todoRoute = require("./routes/todos");

//mount the todo API routes
app.use("/api/v1", todoRoute);

//start the server
app.listen(PORT, () => {
  console.log(`server start at the port number ${PORT}`);
});

// connect to the database
const dbconnect = require("./config/database");
dbconnect();

//default route
app.get("/", (req, res) => {
  res.send(`<h1>this is home page baby</h1> `);
});
