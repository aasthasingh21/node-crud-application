const express = require('express');
const Connection = require('./database/db'); //importing the database 
const taskRouter = require('./routes/route'); // importing the routes
const bodyParser = require('body-parser');

const app = express(); // express is assigned in app

app.use(bodyParser.json()); // to send data in json format

app.use('/route', taskRouter); // creating the middleware


const PORT = process.env.PORT || 8000; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});