import React, { useState  } from 'react'

const App = () => {
 const [count, setCount] = useState(0);
 const [sum, setSum] = useState(1);

  let counter =0;
    for (let i =1 ; i<=sum ;i++){
      counter += i; 
    } 
  
  return(
    <div>
      <input type="number" value={sum}
       onChange={(e) =>{
         setSum(e.target.value) ;
         }
          }
      />
      <h1>Sum: {counter}</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App