import React, { useState } from 'react';



 export function App() {
  
  return (
    <>
    {/* this is the ugly way to pass a component inside another comp  <CardWrapper innercomp = {<TextComp/>}/> */}
    <CardWrapper>
      hi there 
    </CardWrapper>
    {/* this is the right way , and this can be accessed through "children " variable  */}
    {/* that is CHILDREN variable contains all the things wrapped by the outer component  */}
      </>
  )
}
function TextComp(){
  return(
    <>
    <h1>hello world</h1>
    </>
  )
}

function CardWrapper({children}){
  
  return(
    <div style={{border: '2px solid black', padding: '10px'}}>
      {children}
    </div>
  )
}

