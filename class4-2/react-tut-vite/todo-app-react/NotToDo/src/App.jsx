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

  return (
    <div>
      {/* <Todo title={todo[0].title} description={todo[0].description}/>
      <Todo title={todo[1].title} description={todo[1].description}/> */}
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
