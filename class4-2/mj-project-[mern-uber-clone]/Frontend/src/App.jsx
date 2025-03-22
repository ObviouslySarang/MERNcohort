import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'; // Import Home component
import UserLogin from '../pages/UserLogin'; // Import UserLogin component
import UserSignup from '../pages/UserSignup'; // Import UserSignup component
import CaptainLogin from '../pages/CaptainLogin'; // Import CaptainLogin component
import CaptainSignup from '../pages/CaptainSignup'; // Import CaptainSignup component

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<UserLogin/>} />
      <Route path='/signup' element={<UserSignup/>} />
      
      <Route path='/captain/login' element={<CaptainLogin/>} />
      <Route path='/captain/signup' element={<CaptainSignup/>} />
      
    </Routes>
  )
}

export default App