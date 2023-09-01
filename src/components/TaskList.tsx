import React from "react";
import Task from "../models/task";
import '../taskList.css'; 

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps): JSX.Element {
  console.log(tasks);

  return (
    <div>
      <h1>Task List</h1>
      <div>
        <ul>
          {tasks.map((taskItem) => {
            const priorityClass =
              taskItem.priority === "Low"
                ? "low-priority"
                : taskItem.priority === "Medium"
                ? "medium-priority"
                : "high-priority";

            return (
              <li key={taskItem.id} className={`task ${priorityClass}`}>
                {taskItem.taskName}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
