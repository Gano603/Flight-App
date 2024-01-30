import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineDone } from "react-icons/md";
import { Link } from 'react-router-dom';
import InfoBox from './components/InfoBox';


const points = [
    "Exclusive member-only offers", "Earn & spend Avios your way", "Collect Avios with your family",
    "Complimentary onboard Wi-Fi (1 hour)", "Pay with Cash + Avios & save", "Shop & Pay at Qatar Duty Free",
    "Enjoy award flights & upgrades", "Get extra baggage allowance", "allowance Access international lounges*"
]

const Signup = () => {
    return (
        <div className=''>
            <div className='relative'>
                <img className='w-full h-[28rem] brightness-50'
                    src="https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/privilege-club/campaigns/acquisition/h1-family-beach-hn.jpg" alt="Qatar Airways Logo" />
                <div className='absolute top-[35%] left-[23%]'>
                    <p className='text-4xl text-white'>Join Privilege Club to start <br /> earning Avios today.</p>
                </div>
            </div>
            <div className='mx-[17vw] flex my-12 items-center'>
                <div className=' border-r-[1px] border-purple-900 px-3'>
                    <GiHamburgerMenu className='text-4xl text-purple-900' />
                </div>
                <div className='flex px-3'>
                    <Link to={'/'} className='mx-1 hover:underline text-purple-900'>Home</Link>
                    <p className='mx-1'>&gt;</p>
                    <Link to={'#'} className='mx-1 hover:underline text-purple-900'>Privilege Club</Link>
                    <p className='mx-1'>&gt;</p>
                    <p className='mx-1 text-purple-900 font-bold'>Join Now</p>
                </div>
            </div>
            <div className='mx-[19vw] my-10'>
                <div className='bg-white py-4 px-5 rounded-md'>
                    <div className='mx-2'>
                        <p className='text-purple-950 text-lg font-semibold'>Why join Privilege Club?</p>
                    </div>
                    <div className='grid grid-cols-3 my-3'>
                        {points.map((index,iter) => {
                            return (
                                <div key={iter} className='flex items-center my-1'>
                                    <MdOutlineDone className='text-green-500 text-xl mx-2' />
                                    <p className='text-[1.08rem] text-purple-950'>{index}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='my-2'>
                        <p className='text-purple-900 mx-4 text-lg'>*Exclusive for Silver, Gold and Platinum membership tier.</p>
                    </div>
                </div>
                <h1 className='text-[2.8rem] font-semibold my-4 text-purple-950'>It only takes a minute to register for your account</h1>
                <div className='my-4'>
                    <p className='text-purple-950'>Already a Member? <Link to={'/login'} className='hover:underline'>Login Here</Link></p>
                </div>
                <InfoBox />
            </div>
        </div>
    )
}

export default Signup
