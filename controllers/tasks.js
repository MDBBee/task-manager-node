const Task = require("../model/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const tasks = await Task.create(req.body);
    res.status(201).json({ tasks });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });

    if (!task)
      return res
        .status(404)
        .json({ msg: `No result for an item with the id: ${req.params.id}` });
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task)
      return res
        .status(404)
        .json({ msg: `No result for an item with the id: ${req.params.id}` });
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id });

    if (!task)
      return res
        .status(404)
        .json({ msg: `No result for an item with the id: ${req.params.id}` });
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
