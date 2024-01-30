import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const [email,setemail] = useState();
  const [emailError,setemailError] = useState();
  const [password,setpassword] = useState();
  const [passwordError,setpasswordError] = useState();

  const nav = useNavigate();


  const submitHandler = async() => {
    if(!email){
      setemailError("Email is required")
    }
    else setemailError("")

    if(!password){
      setpasswordError("Password is required")
    }
    else setpasswordError("")

    const res = await axios.post(import.meta.env.VITE_API_URL+'user/login',{
      email,password
    },{withCredentials:true})

    console.log(res)
    if(res.response.status === 398){
      setpasswordError(res.data.message)
      setemailError(res.data.message)
    }
    else if(res.response.status === 400){
      setpasswordError(res.data.message)
    }
    else{
      nav('/')
    }

  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='flex'>
        <div className='w-1/2 border-r-[1px] border-r-purple-500'>
          <h1 className='text-4xl text-purple-950 my-3'>Log In</h1>
          <input value={email} onChange={(e)=> setemail(e.target.value)} className={`w-4/5 my-2 h-12 outline-none border-[1px] px-2 ${emailError? "border-red-600":"border-gray-300"}`} placeholder='Email Address' type="email" />
          <p className='text-red-600 text-xs'>{emailError}</p>
          <input value={password} onChange={(e)=> setpassword(e.target.value)} className={`w-4/5 my-2 h-12 outline-none border-[1px] border-gray-300 px-2 ${passwordError? "border-red-600":"border-gray-300"}`} placeholder='Password' type="password" />
          <p className='text-red-600 text-xs'>{passwordError}</p>
          <button onClick={submitHandler} className='block px-6 my-2 py-2 border-2 border-purple-950 text-white rounded-md font-semibold bg-purple-950'>Log In</button>
        </div>
        <div className='flex flex-col justify-center items-center w-1/2'>
          <h1 className='text-2xl text-purple-950'>Don’t have an account yet?</h1>
          <p className='w-3/4 my-2 text-center'>Manage your bookings and receive our latest news and offers just for you</p>
          <Link to={'/signup'} className='my-4 px-7 py-3 border-2 border-purple-950'>Create Account</Link>
        </div>
      </div>

    </div>
  )
}

export default Login