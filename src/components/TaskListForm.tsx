import React, { useState } from "react";

interface TaskListFormProps {
  addTask: (taskName: string, priority: string, dueDate: string) => void;
}

export default function TaskListForm({ addTask }: TaskListFormProps): JSX.Element {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Low');
  const [dueDate, setDueDate] = useState("");
  const [ error, setError ] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!task.trim()) {
        setError("Task title is required."); // Set the error message
        return; // Exit the function to prevent submission
      }
  
      // Clear any previous error message
      setError("");
  
    let newTask = task;
    addTask(newTask, priority, dueDate);
    setTask('');
  }

  return (
    <div className="max-w-xs mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Create a New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          <input
            id="taskTitle"
            type="text"
            placeholder="Enter a task name"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="space-x-4">
          <label className="block text-sm font-medium text-gray-700">Priority</label>
          <div className="flex items-center">
            <input
              type="radio"
              id="low-priority"
              name="priority"
              value="Low"
              checked={priority === "Low"}
              onChange={() => setPriority("Low")}
              className="text-blue-600 border-gray-300 focus:ring-blue-500 h-4 w-4"
            />
            <label htmlFor="low-priority" className="ml-2 text-sm text-gray-700">
              Low
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="medium-priority"
              name="priority"
              value="Medium"
              checked={priority === "Medium"}
              onChange={() => setPriority("Medium")}
              className="text-yellow-600 border-gray-300 focus:ring-yellow-500 h-4 w-4"
            />
            <label htmlFor="medium-priority" className="ml-2 text-sm text-gray-700">
              Medium
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="high-priority"
              name="priority"
              value="High"
              checked={priority === "High"}
              onChange={() => setPriority("High")}
              className="text-red-600 border-gray-300 focus:ring-red-500 h-4 w-4"
            />
            <label htmlFor="high-priority" className="ml-2 text-sm text-gray-700">
              High
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">
            Due Date
          </label>
          <input
            id="dueDate"
            type="date"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}
