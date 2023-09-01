import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import Task from './models/task';
import TaskListForm from './components/TaskListForm';
import { v4 as getID } from 'uuid';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: string, priority: string) => {
    setTasks([...tasks, { id: getID(), taskName: task, priority }]);
  };

  return (
    <div className="App">
      <TaskList tasks={tasks} />
      <TaskListForm addTask={addTask} />
    </div>
  );
}

export default App;
