import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <div className='flex items-center justify-between pb-5 font-medium'>

                <img className='h-12 mt-2' src={assets.logo} alt="" />

                <div className='inline-flex items-center justify-center border broder-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-80'>
                    <input type="text" placeholder='Search' className='flex-1 outline-none bg-inherit text-sm' />
                    <img src={assets.serach} className='w-4' alt="" />
                </div>

                <ul className='flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.7px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/movies' className='flex flex-col items-center gap-1'>
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.7px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/admin' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.7px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/auth' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.7px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            </div>
        </div>
    )
}

export default Header