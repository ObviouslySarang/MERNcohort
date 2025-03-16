
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
    //this is a fragment this is used to wrap multiple elements in a single parent element 
    <>
    <App />
   
    </>
    
 
)
