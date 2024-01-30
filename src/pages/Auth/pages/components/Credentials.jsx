import React, { useState } from 'react'

const Credentials = ({email,setemail,password,setpassword,cpassword,setcpassword,phone,setphone,emailError,passwordError,phoneError,}) => {

  return (
    <div className='flex m-3 py-3 border-b-2 border-grey-400'>
      <div className='w-1/3'>
        <p className='text-purple-950 text-xl'>Let's Create your credentials.</p>
      </div>
      <div className='w-2/3'>
        <input value={email} onChange={(e)=>setemail(e.target.value)} className={`outline-none h-12 px-3 my-2 w-full border-[1px] ${emailError? "border-red-600":"border-slate-200"}`} type="email" placeholder='Email Address' />
        <p className='text-red-600 text-xs'>{emailError}</p>
        <input value={password} onChange={e => setpassword(e.target.value)} className={`outline-none h-12 px-3 my-2 w-[48.8%] mr-4 border-[1px] ${[passwordError? "border-red-600":"border-slate-200"]}`} type="password" placeholder='Password' />
        <p className='text-red-600 text-xs'>{passwordError}</p>
        <input value={cpassword} onChange={e => setcpassword(e.target.value)} className={`outline-none h-12 px-3 my-2 w-[48.8%] border-[1px] ${[passwordError? "border-red-600":"border-slate-200"]}`} type="password" placeholder='Confirm Password' /><br />
        <p className='text-red-600 text-xs'>{passwordError}</p>
        <input value={phone} onChange={e => setphone(e.target.value)} className={`outline-none h-12 px-3 my-2 w-[48.8%] border-[1px] ${phoneError? "border-red-600":"border-slate-200"}`} type="number" placeholder='Mobile Number' />
        <p className='text-red-600 text-xs'>{phoneError}</p>
      </div>
    </div>
  )
}

export default Credentials