import { useState } from 'react'



function App() {
  const [todo, setTodo] = useState([{
    title:"drink and drive",
    description:"advice to not drink and drive",
    completed:false
  },{
    title:"smoke",
    description:"advice to not smoke",
    completed:true
  }])
  function addTodo(){
    setTodo([...todo,{
      title:"new todo",
      description:"new todo description",
      completed:false
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todo.map(function(todo){
        return <Todo title={todo.title} description={todo.description}/>
      })}
    </div>
    
  )
}

function Todo(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default App
