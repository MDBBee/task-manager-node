const mongoose = require("mongoose");

const connString =
  "mongodb+srv://Bobby:xnyIXG4WSDr0tj8e@node-taskmanager.mm1tg.mongodb.net/taskManager?retryWrites=true&w=majority&appName=Node-TaskManager";

const connectDB = () => {
  return mongoose.connect(connString);
};

module.exports = connectDB;
