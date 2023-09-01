import React from "react";
import Task from "../models/task";
import "../taskList.css"; 

interface TaskListProps {
  tasks: Task[];
  markTaskCompleted: (taskId: string) => void;
}

export default function TaskList({ tasks, markTaskCompleted }: TaskListProps): JSX.Element {
  return (
    <div>
      <h1>Task List</h1>
      <div>
        <ul>
          {tasks.map((taskItem) => (
            <li
              key={taskItem.id}
              className={`task ${
                taskItem.priority === "Low"
                  ? "low-priority"
                  : taskItem.priority === "Medium"
                  ? "medium-priority"
                  : "high-priority"
              } ${taskItem.completed ? "completed" : ""}`}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={`taskCompleted_${taskItem.id}`}
                  checked={taskItem.completed}
                  onChange={() => markTaskCompleted(taskItem.id)}
                  className="mr-2"
                />
                <label htmlFor={`taskCompleted_${taskItem.id}`}>{taskItem.taskName}</label>
              </div>
              <p className="text-sm text-gray-500">Priority: {taskItem.priority}</p>
              <p className="text-sm text-gray-500">Due Date: {taskItem.dueDate}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
