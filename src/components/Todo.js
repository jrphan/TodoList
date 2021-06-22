import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from 'react-icons/ti';


function Todo({todos, completeTodo, removeTodo,updateValue}) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    });

    const submitValue = value => {
        updateValue(edit.id, value)
        setEdit({
            id: null,
            value: '',
        })
    }

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitValue}/>
    }

    return todos.map((todo, index) => (
        <div 
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
            key={index}
        >
            <div
                key={todo.id}
                onClick={() => completeTodo(todo.id)}
            >
                {todo.text}
            </div>
            <div className="icon">
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className="delete"
                />
                <TiEdit
                    onClick={() => setEdit({ id: todo.id, value:todo.text})}
                    className="edit"
                />
            </div>
        </div>
    ))
}

export default Todo
