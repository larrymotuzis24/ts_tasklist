import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import Task from './models/task';
import TaskListForm from './components/TaskListForm';
import { v4 as getID } from 'uuid';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskName: string, priority: string, dueDate: string) => {
    setTasks([...tasks, { id: getID(), taskName: taskName, priority, dueDate }]);
  };

  return (
    <div className="App">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Task List</h1>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-1/2">
            <TaskList tasks={tasks} />
          </div>
          <div className="lg:w-1/2">
            <TaskListForm addTask={addTask} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
