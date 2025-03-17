
import React, { useEffect, useState } from 'react';



 export function App() {
   const [todos, setTodos] = useState([]);
   
   useEffect(() => {
    setInterval(() => {
      console.log('hello')
      fetch('https://sum-server.100xdevs.com/todos')
      .then(async(response) => {
                 const data = await response.json()
                 setTodos(data)})
    }
    , 10000)
  }
  , [])
    
  
    
  return (

    <div>
      {todos.map((todo) => {
        return <Todo title = {todo.title} desc = {todo.desc}/>
      }
      )}
    </div>
    
    // {/* this is the ugly way to pass a component inside another comp  <CardWrapper innercomp = {<TextComp/>}/> */}
    // {/* <CardWrapper>
    //   hi there 
    // </CardWrapper> */}
    // {/* this is the right way , and this can be accessed through "children " variable  */}
    // {/* that is CHILDREN variable contains all the things wrapped by the outer component  */}

      
  )
}
function Todo({title,desc}){
  
  return(
    <div>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}
// function TextComp(){
//   return(
//     <>
//     <h1>hello world</h1>
//     </>
//   )
// }

// function CardWrapper({children}){
  
//   return(
//     <div style={{border: '2px solid black', padding: '10px'}}>
//       {children}
//     </div>
//   )
// }

