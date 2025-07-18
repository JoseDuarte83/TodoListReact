import React, { useState } from "react";

function TodoForm({onAddTask}) {
    const [taskText, setTaskText] = useState('');

    const HandleSubmit = (e)=>{
        e.prevent.default(); //previene que la pag quede vacia
        if (taskText.trim()){ //revisa que el texto no esté vacio
            onAddTask(taskText); //llamando a la función padre o principal
            setTaskText('');
        }
    };
    return(
        <form onSubmit={HandleSubmit}>
            <input
            type="text"
            placeholder="Añadir nueva tarea"
            value={taskText}
            onChange={(e)=> setTaskText(e.target.value)}
            />
            <button type="submit">Añadir tarea</button>

        </form>
    );
}

export default TodoForm;