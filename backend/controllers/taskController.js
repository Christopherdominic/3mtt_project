// backend/controllers/taskController.js
const getTasks = (req, res) => {
    res.send('Get all tasks');
  };
  
  const createTask = (req, res) => {
    res.send('Create a task');
  };
  
  module.exports = {
    getTasks,
    createTask,
  };
  