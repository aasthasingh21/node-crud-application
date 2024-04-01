# Nodejs CRUD application :-
 - Its a mini backend project using nodejs, expressjs and mongodb. It includes simple CRUD opertions.
 - The code follows the MVC (Model, view and controller) method for better/cleaner experience.

## App Setup :-
 - Install express, mongodb and mongoose for app setup. (npm install ...)
 - Create app.js/index.js file which is the main file.
 - Import/require express and then assigned in a const name as app (app has all the express features)
 - Define the port for the app to run.

## Databse setup :-
 - NoSql - mongodb is used for database. It can be connected with the app in two ways locally/cloud platform, here i am connecting it locally.
 - Mongoose a mongodb library is used to connection and a databse with name crudApp is created and exported.
 - The start script(package.json) run the app.js file so we mention/import the database on the app.js.

## Model :-
 - Model is used for creating different schemas(structure of the data) in the database.
 - we create new scchema for tasks using mongoose(title, description, status...). 

## Routes : RESTful API endpoints :-
 - Create a page route.js to handle all the routes and controller.js to handle the interaction, client req and res.
 - when particular api endpoint is hit it triggers the controller function associated with it.

  1. router.get('/', taskControllers.getAllTasks) : READ operation
   - When get('/') is hit(req from frontend), it triggers the getAllTasks function in the controller.
   - getAllTasks handles req from client and res from server making it asyncronous code so we make use of   async-await and try-catch block for error handling.
   - getAlltasks finds all the tasks(Task.find(), find(): is a mongodb function to get/find the data in the   database). and send the response(res.json()) to the frontend.
   - If any error occoured in the above process(try block) then catch block is executed, stating the error.

  2. router.post('/', taskControllers.createNewTask) : CREATE operation
   - When post('/') is hit(req from frontend), it triggers the createNewTask function in the controller.
   - createNewTask creates a new task based on the frontend req(req.body.title, req.body.status,....).
   - Utilise a try-catch block for error handling. If an error occurs during task creation or saving(.save(): is a mongodb function to save the data).
   - It sends a 500 Internal Server Error response with the error message to the client(catch block).

  3. router.get('/:id', taskControllers.getTaskById) : READ operation
   - When get('/:id') is hit(req from frontend), it triggers the getTaskById function in the controller.
   - Utilizes the findById method (a MongoDB function) to retrieve a specific task from the database based on the ID provided in the req.
   - Utilizes a try-catch block for error handling. If the task with the provided ID is not found, it sends a 404 Not Found response with a message indicating that the task was not found. 
   - If any other error occurs, it sends a 500 Internal Server Error response with the error message.
 
  4. router.patch('/:id', taskControllers.updateTask) : UPDATE operation
   - When patch('/:id') is hit(req from frontend), it triggers the updateTask function in the controller.
   - To update we can use either put/patch http method, put is mostly used for updating entire data and patch for specific/some data.
   - Finds the task in the database using the provided ID. If the task is not found, it sends a 404 Not Found response. 
   - Otherwise, it updates the task's title, description, status, and updatedAt fields based on the data received in the request body.

  5. router.delete('/:id', taskControllers.deleteTask) : DELETE operation
   - When delete('/:id') is hit(req from frontend), it triggers the deleteTask function in the controller.
   - Finds the task in the database using the provided ID. If the task is not found, it sends a 404 Not Found response.
   - If task is present with that id it deletes it from the database using task.delete(.delete: is a mongodb function to delete particular data).

## All the endpoints were checked using postman.

