import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, onToggleComplete, onDeleteTask}){
    return(
        <ul>
            {tasks.map(task =>(
                <TodoItem
                key={task.id}
                task={task}
                onToggleComplete={onToggleComplete}
                onDeleteTask={onDeleteTask}
                />
            ))}
        </ul>
    );
}

export default TodoList;