import React, { useState } from 'react';

function TaskManager() {
  // State initialization with useState
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = () => {
    const newTask = {
      id: Date.now(), // Using timestamp as the unique id
      title: 'New Task', // Default title
      completed: false // Initial completion status
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  // Function to toggle task completion
  const toggleTaskCompletion = taskId => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </span>
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
