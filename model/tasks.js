const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({ // creating the schema for the each task 
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['Pending', 'Completed'], 
    default: 'Pending' 
  },
  createdAt: { 
    type: Date,
    default: Date.now // is for timeStamp
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});
  
module.exports = mongoose.model('Task', taskSchema);