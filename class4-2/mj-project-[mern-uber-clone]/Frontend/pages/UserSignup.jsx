import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [userData, setuserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setuserData({email, password});
    console.log(userData);
    setFirstname('');
    setLastname('');
    setEmail('');
    setpassword('');

  }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img
          className='w-16 mb-4'
          src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
          alt="uber-logo"
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className='text-base font-medium mb-2'>What's Your Name?</h3>
          <div className='flex gap-2'>
            <input
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-1/2 text-sm placeholder:text-base'
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
              type="name"
              placeholder="Firstname"
            />
            <input
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-1/2 text-sm placeholder:text-base'
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
              type="name"
              placeholder="Lastname"
            />
          </div>
          <h3 className='text-base font-medium mb-1'>What's Your Email?</h3>
          <input
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="name"
            placeholder="Enter Email here"
          />
          <h3 className='text-base font-medium mb-2'>Enter Password</h3>
          <input
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base'
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
            type="password"
            placeholder="Password"
          />
          <button className='bg-black text-white font-semibold w-full py-3 rounded mt-4 mb-3'>
            Signup
          </button>

          <p>
            Already have a account?{' '}
            <Link to='/login' className='text-blue-600'>
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div className='text-xs text-gray-500 text-center mt-4'>
        <p>By signing up, you agree to our Terms of Service.</p>
        <p>Please review our Privacy Policy for more information.</p>
      </div>
    </div>
  );
}

export default UserSignup