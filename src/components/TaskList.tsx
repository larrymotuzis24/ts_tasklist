import React from "react";

import Task from "../models/task";

interface TaskListProps {
    tasks: Task[]
};

export default function TaskList({tasks}: TaskListProps): JSX.Element {
    console.log(tasks)
    
    return (
        <div>
            <h1> Task List </h1>
            <div>
                <ul>
                    {tasks.map((taskItem) => {
                        return (
                            <li key={taskItem.id} > {taskItem.taskName} </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
};