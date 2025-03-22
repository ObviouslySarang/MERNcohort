import React from 'react'
import { Link } from 'react-router-dom' 
const Home = () => {
  return (
    <div>
        <div className=' h-screen flex  pt-8 justify-between flex-col w-full bg-red-400 bg-cover bg-center
        bg-[url(https://plus.unsplash.com/premium_photo-1736517550995-44ad360b5738?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'>
            
              <img 
                className='w-16 ml-8 '
                src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
                alt="uber-logo" 
              />
              <div className='bg-white pb-7 py-5 px-4'>
              <h2 className='text-3xl font-bold' >Get Started with Uber</h2>
              <Link to='/login' className= ' flex items-center justify-center bg-black w-full text-white py-3 rounded mt-4' >Continue</Link>
              </div>
            </div>
        
    </div>
  )
}

export default Home
