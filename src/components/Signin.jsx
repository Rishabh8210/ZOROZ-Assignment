import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  // State hooks to manage form input values
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function handleSubmit(e) {
    e.preventDefault(); // Prevents the default form submission behavior
    window.location.href = "./"; // Redirect to home page after successful signin (should ideally be handled by routing)
  }
  return (
    <div className='h-fit  w-full flex justify-center py-10 px-5 items-center'>
      {/* Main container for the signin form */}
      <div className='h-fit p-2  md:w-1/2 py-6 bg-orange-400 flex flex-col justify-center items-center rounded-lg shadow-xl'>
        <h1 className='text-3xl text-white font-semibold'>Sign in</h1>
        {/* Signin form */}
        <form onSubmit={handleSubmit} className='h-full w-full py-5  flex flex-col items-center gap-5'>
           {/* Email Input */}
          <div className='w-full px-5 md:w-1/2 flex flex-col '>
            <label className='text-2xl font-semibold text-white' htmlFor='email'>Email</label>
            <input className='h-12 w-full px-3 text-lg rounded-lg' type='text' name='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          {/* Password Input */}
          <div className='w-full px-5 md:w-1/2 flex flex-col'>
            <label className='text-2xl font-semibold text-white' htmlFor='password'>Password</label>
            <input className='h-12 w-full px-3 text-lg rounded-lg' type='password' name='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {/* Submit button and link to the signup page */}
          <div className='w-full md:w-1/2 flex flex-col items-center gap-4'>
            <button className='h-10 w-28 rounded-md bg-bgColor font-semibold hover:bg-orange-100'>Sign in</button>
            <p className='text-white text-lg'>Don't have an account ? <Link to='/signup'><span className='text-blue-700 font-bold'>Register</span></Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin