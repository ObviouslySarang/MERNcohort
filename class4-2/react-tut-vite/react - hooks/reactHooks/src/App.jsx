import React, { useState } from 'react';

let count = 4;

 export function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      title: 'todo1',
      desc: 'description1'
    },
    {
      id:2,
      title: 'todo2',
      desc: 'description2'
    },
    {
      id:3,
      title: 'todo3',
      desc: 'description3'
    }
  ]);
  function addTodo (){
    setTodos([...todos,{
      id:count++,
      title: Math.random(),
      desc: Math.random()
    }])
  }
  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo)=>(<Todo key={todo.id} title={todo.title} desc={todo.desc}/>))}
    </>
  )
}

function Todo({title,desc}){
  return(
    <div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  )

}

