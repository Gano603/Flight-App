import React, { useState } from 'react'
import Credentials from './Credentials'
import PersonalInfo from './PersonalInfo'
import Location from './Location'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const InfoBox = () => {

  const nav = useNavigate();

  const [email, setemail] = useState()
  const [emailError, setemailError] = useState()
  const [password, setpassword] = useState()
  const [passwordError, setpasswordError] = useState()
  const [cpassword, setcpassword] = useState()
  const [country, setcountry] = useState()
  const [countryError, setcountryError] = useState()
  const [dob, setdob] = useState()
  const [dobError, setdobError] = useState()
  const [phone, setphone] = useState()
  const [phoneError, setphoneError] = useState()
  const [fname, setfname] = useState()
  const [fnameError, setfnameError] = useState()
  const [title, settitle] = useState()
  const [titleError, settitleError] = useState()
  const [mname, setmname] = useState()
  const [lname, setlname] = useState()
  const [lnameError, setlnameError] = useState()

  const submitHandler = async() =>{

    if(!email){
      setemailError("Email Required")
    }
    else setemailError("")
    if(!password || !cpassword){
      setpasswordError("Password Required")
    }
    else setpasswordError("")
    if(!country){
      setcountryError("Country Required")
    }
    else setcountryError("")
    if(!dob){
      setdobError("Date of Birth Required");
    }
    else setdobError("")
    if(!phone){
      setphoneError("Phone Required");
    }
    else setphoneError("")
    if(!fname){
      setfname("First Name Required");
    }
    else setfnameError("")
    if(!lname){
      setlnameError("Last Name Required");
    }
    else setlnameError("")

    if(password !== cpassword){
      setpasswordError("passwords do not match")
    }
    else if(fname && lname && password && cpassword && dob && email && title && country){
      setpasswordError('')
      const res = await axios.post(import.meta.env.VITE_API_URL+'user/signup',{
        email,password,country,dob,phone,fname,mname,lname,title
      },{withCredentials:true})

      console.log(res)

      if(res.statusCode === 200){
        nav('/')
      }
    }

  }

  return (
    <div className='px-4 py-3 bg-white'>
        <Credentials email={email} emailError={emailError} passwordError={passwordError} phoneError={phoneError}  setemail={setemail} password={password} setpassword={setpassword} cpassword={cpassword} setcpassword={setcpassword} phone={phone} setphone={setphone} />
        <PersonalInfo title={title} titleError={titleError} fnameError={fnameError} lnameError={lnameError} dobError={dobError} settitle={settitle} fname={fname} setfname={setfname} mname={mname} setmname={setmname} lname={lname} setlname={setlname} dob={dob} setdob={setdob} />
        <Location country={country} setcountry={setcountry} countryError={countryError}/>
        <div className='flex justify-center items-center h-20 w-full'>
          <button onClick={submitHandler} className='disabled:bg-purple-300  bg-purple-600 text-white font-semibold px-6 py-3 rounded-md h-max'>Create an Account</button>
        </div>
    </div>
  )
}

export default InfoBox