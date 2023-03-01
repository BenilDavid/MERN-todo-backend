const Task = require('../model/taskModel');

// create a task
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

// get all task
const getAllTask = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

// get single task
const getSingleTask = async (req, res) => {
    try {
        const {id} = req.params;
        const tasks = await Task.findById(id);
        res.status(200).json(tasks);
        if(!tasks){
            res.status(404).json(`no tasks with id: ${id}`);
        }
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

// delete task
const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const tasks = await Task.findByIdAndDelete(id);
        res.status(200).json(tasks);
        if(!tasks){
            res.status(404).json(`no tasks with id: ${id}`);
        }
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// update task
const updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const tasks = await Task.findByIdAndUpdate({_id: id}, req.body, {new: true, runValidators: true});
        res.status(200).json(tasks);
        if(!tasks){
            res.status(404).json(`no tasks with id: ${id}`);
        }
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}


module.exports = {
    createTask,
    getAllTask,
    getSingleTask,
    deleteTask,
    updateTask
};