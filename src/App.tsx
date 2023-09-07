import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import Task from './models/task';
import TaskListForm from './components/TaskListForm';
import { v4 as getID } from 'uuid';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: string, priority: string, dueDate: string) => {
    setTasks([...tasks, { id: getID(), taskName: task, priority, dueDate, completed: false }]);
  };

  const markTaskCompleted = (taskId: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => !task.completed);

  return (
    <div className="App">
      <h1 className='text-2xl text-center pt-8 pb-4'> Task Manager </h1>
      <div className="flex container-with-border">
        <div className="w-1/2 p-4">
          <TaskList tasks={filteredTasks} markTaskCompleted={markTaskCompleted} />
        </div>
        <div className="w-1/2 p-4">
          <TaskListForm addTask={addTask} />
        </div>
      </div>
    </div>
  );
}

export default App;

