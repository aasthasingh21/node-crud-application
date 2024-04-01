
const Task = require('../model/tasks');

// Get all  the tasks
const getAllTasks = async (req, res) => {
    // we use try and catch for error handling, if no error run try code and if any error it runs catch code
    try { 
        const tasks = await Task.find(); // .find is a mongodb function for getting the data
        res.json(tasks); // to show the data on the frontend
        res.status(200).json('all the tasks');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// create new task
const createNewTask = async (req, res) => {
    // we make use of postman(as a frontend) for api req
    const task = new Task({ // creating a new task by the data from frontend(req)
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt
    });

    try {
        const a1 = await task.save(); // saving the data in the database
        res.json(a1); 
        res.status(200).json('new task created');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// get particular task by id
const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id); // we make use of findById (mongodb function) to get particular task

        if (!task) { // if task is not present then we send message saying task not found
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json(task);
        res.status(200).json('task by id');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// update task 
const updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id); // finding the task

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
      
        // if task found update desired data
        task.title = req.body.title || task.title;
        task.description = req.body.description || task.description;
        task.status = req.body.status || task.status;
        task.updatedAt = Date.now();
    
        const updatedTask = await task.save(); // saving the updated data/task
        res.json(updatedTask);
        res.status(200).json('task updated');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// delete task
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id); // finding the task by id

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        const a1 = await task.deleteOne(); // deleteing the task
        res.json(a1);
        res.status(200).json('task deleted');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = {
    getAllTasks,
    createNewTask,
    getTaskById,
    updateTask,
    deleteTask,
};