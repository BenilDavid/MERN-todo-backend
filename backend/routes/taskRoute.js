const express = require('express');
const { createTask, getAllTask, getSingleTask, deleteTask, updateTask } = require('../controller/taskController');
const Task = require('../model/taskModel');
const router = express.Router();

router.post("/", createTask);
router.get("/", getAllTask);
router.get("/:id", getSingleTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

module.exports = router;