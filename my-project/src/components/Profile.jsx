import React, { useState, useEffect } from 'react'
import { getMovieDetails, getUserBooking, getUserDetails } from '../api/apiHelpers'
import { assets } from '../assets/assets'
import Title from './Title'

const Profile = () => {
    const [booking, setBooking] = useState()
    const [user, setUser] = useState()

    useEffect(() => {
        getUserBooking()
            .then((res) => setBooking(res.booking))
            .catch((err) => console.log(err))
        getUserDetails()
            .then((res) => setUser(res.user))
            .catch((err) => console.log(err))
    }, [])

    

    return (
        <div className='w-full flex'>
            {
                user &&
                <>
                    <div className='w-1/3 flex flex-col justify-center items-center'>
                        <img className='w-40' src={assets.profile} alt="" />
                        <p className='p-1 mt-2 w-auto text-center border'>Name : {user.name}</p>
                        <p className='p-1 mt-2 w-auto text-center border'>Name : {user.email}</p>
                    </div>
                    {booking && <> <div className='w-2/3'>
                        <div className='flex justify-center text-2xl'><Title text1={'YOUR'} text2={'BOOKINGS'} /></div>
                        <div className='flex flex-col w-4/5 m-auto'>
                            {
                                booking.map((item, index) => {
                                    return (
                                        <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                                            <div className='flex items-start gap-6'>
                                                <img className='w-16 sm:w-20' src={assets.pi1} alt="" />
                                                <div>
                                                    <p className='text-xs sm:text-lg font-medium'>Movie: {item.movie}</p>
                                                    <div className='flex items-center gap-5 mt-2'>
                                                        <p></p>
                                                        <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src={assets.bin} className='w-4 mr-4 sm:w-5 cursor-pointer' alt="" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div> </>}
                </>
            }
        </div>
    )
}

export default Profile