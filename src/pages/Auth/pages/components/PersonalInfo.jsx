import React from 'react'

const PersonalInfo = ({fname,setfname,lname,setlname,mname,setmname,title,settitle,dob,setdob,fnameError,lnameError,titleError,dobError}) => {
    return (
        <div className='flex m-3 py-3 border-b-2 border-grey-400'>
            <div className='w-1/3'>
                <p className='text-purple-950 text-xl'>Your Personal Details</p>
            </div>
            <div className='w-2/3'>
                <select onChange={e => settitle(e.target.value)} className={`outline-none h-12 px-3 my-2 w-[48.8%] mr-4 border-[1px] ${titleError? "border-red-600":"border-slate-200"}`} name="countryCode" id="">
                    <option disabled selected>Title</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Ms">Ms</option>
                    <option value="Dr">Dr</option>
                </select>
                <br />
                <p className='text-red-600 text-xs'>{titleError}</p>
                <input value={fname} onChange={e => setfname(e.target.value)} className={`outline-none h-12 px-3 my-2 w-[31.5%] mr-4 border-[1px] ${fnameError? "border-red-600":"border-slate-200"}`} type="text" placeholder='First Name' />
                <p className='text-red-600 text-xs'>{fnameError}</p>
                <input value={mname} onChange={e => setmname(e.target.value)} className='outline-none h-12 px-3 my-2 w-[31.5%] mr-4 border-[1px] border-slate-200' type="text" placeholder='Middle Name (Optional)' />
                <input value={lname} onChange={e => setlname(e.target.value)} className={`outline-none h-12 px-3 my-2 w-[31.5%] border-[1px] ${lnameError? "border-red-600":"border-slate-200"}`} type="text" placeholder='Last Name' />
                <p className='text-red-600 text-xs'>{lnameError}</p>
                <p className='text-purple-950 text-sm mt-4'>Date of Birth</p>
                <input value={dob} onChange={e => setdob(e.target.value)} className={`outline-none h-12 px-3 my-2 w-1/3 border-[1px] border-slate-200 ${dobError? "border-red-600":"border-slate-200"}`} type="date" />
                <p className='text-red-600 text-xs'>{dobError}</p>
            </div>
        </div>
    )
}

export default PersonalInfo