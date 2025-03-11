
import React, { useState } from 'react';

export function CreateTodo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return <div>
        <input type="text"  placeholder="title" style={{ padding: '10px', margin: '5px' }} 
        onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input><br />
        <input type="text"  placeholder="description" style={{ padding: '10px', margin: '5px' }}
        onChange = {function(e){
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input><br/>
    <button 
    style={{ padding: '10px', margin: '5px' }}
    onClick={()=>{
        fetch('http://localhost:3000/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                description: description
            })
        })
    }}
    > ADD A TODO</button>
    </div>
}