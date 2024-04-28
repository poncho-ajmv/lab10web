import React, { useState } from 'react';
import './App.css';

function TaskForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!task.trim()) return;
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Description:
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter task description"
        />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

function TaskList({ tasks, removeTask, removeAllTasks }) {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={removeAllTasks}>Delete All</button>
    </div>
  );
}

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const removeAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="container">
      <h1>Mini Task Dashboard</h1>
      <TaskForm addTask={addTask} />
      <h2>Tasks</h2>
      <TaskList
        tasks={tasks}
        removeTask={removeTask}
        removeAllTasks={removeAllTasks}
      />
    </div>
  );
}

export default App;
