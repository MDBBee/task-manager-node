const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Must provide a name!"],
    maxLength: [20, "Name cannot be more than 20 characters!"],
  },

  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
