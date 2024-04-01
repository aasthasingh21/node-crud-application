const express = require('express');
const router = express.Router();
const taskControllers = require('../controller/controller');

router.get('/', taskControllers.getAllTasks); // to get all the tasks (READ)

router.post('/', taskControllers.createNewTask); // for creating new tasks (CREATE)

router.get('/:id', taskControllers.getTaskById); // to get particular task using its id

router.patch('/:id', taskControllers.updateTask); // to edit/update the data (UPDATE)

router.delete('/:id', taskControllers.deleteTask); // to delete the task (DELETE)

module.exports = router;