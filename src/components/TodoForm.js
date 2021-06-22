import React, { useEffect, useRef, useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');


    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleInputChange = e => {
        setInput(e.target.value);
    };
    
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        });
        setInput('');
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input 
                type="text" 
                className="todo-input" 
                value={input} 
                placeholder="Add to do" 
                name="text" 
                onChange={handleInputChange}
                ref={inputRef}
            />
            <button className="todo-btn">Add todo</button>
        </form>
    )
}

export default TodoForm
