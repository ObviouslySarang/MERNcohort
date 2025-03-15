import React, { useState } from 'react';
import { Header } from './Header.jsx';
export function HeaderwithBtn() {
    //one way to reduce re-rendering is to use useState inside the function component which will only re-render the component in which the state is used
     
    const [title, setTitle] = useState("pata nahi 4");
      function updateTitle() {
        setTitle(Math.random());
      }
    return <>
     <button onClick={updateTitle}>click to change</button>
         <Header title = {title}/>
    </>
    //another way to reduce re-rendering is to use React.memo which will only re-render the component if the props are changed
}