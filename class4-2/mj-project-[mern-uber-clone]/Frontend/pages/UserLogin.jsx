
import React,{useState} from 'react'

import { Link } from 'react-router-dom'


const UserLogin = () => {
  const [email, setEmail] = React.useState('');
  const [password, setpassword] = useState('');
  const [userData, setuserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setuserData({email, password});
    console.log(userData);
    setEmail('');
    setpassword('');
  }
  return (
    <div className='p-7 flex flex-col  justify-between h-screen'>
      <div>
        <img
          className='w-16 mb-10 '
          src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
          alt="uber-logo"
        />
        <form  onSubmit ={(e) => submitHandler(e)}>
          <h3 className='text-lg font-medium mb-2'>What's Your Email?</h3>
          <input
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required type="email"
            placeholder="email@mail.com" />
          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required type="password" placeholder="Password" />
          <button className='bg-black text-white font-semibold w-full py-3 rounded mt-4 mb-3' >Login</button>

          <p> New here? <Link to='/signup' className='text-blue-600 '>Create new Account</Link></p>

        </form>
      </div>
      <div>
        <Link to='/captain/login' className='bg-[#ffd31a] text-black flex items-center justify-center font-semibold w-full py-3 rounded mt-4'> Sign in as Captain </Link>
      </div> 
    </div>
  )
}

export default UserLogin