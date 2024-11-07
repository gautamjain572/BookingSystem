import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { adminActions, userActions } from '../store';

const Header = () => {

    const dispatch = useDispatch();

    const isAdminLoggendIn = useSelector((state) => state.admin.isLoggedIn);
    const isUserLoggendIn = useSelector((state) => state.user.isLoggedIn);

    const logout = (isAdmin) => {
        dispatch(isAdmin?adminActions.logout():userActions.logout())
    }

    return (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <div className='flex items-center justify-between pb-5 font-medium'>

                <Link to='/'><img className='h-12 mt-2' src={assets.logo} alt="" /></Link>

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
                        <p>MOVIES</p>
                        <hr className='w-2/4 border-none h-[1.7px] bg-gray-700 hidden' />
                    </NavLink>
                    {!isAdminLoggendIn && !isUserLoggendIn && (<>
                        <NavLink to='/admin' className='flex flex-col items-center gap-1'>
                            <p>ADMIN</p>
                            <hr className='w-2/4 border-none h-[1.7px] bg-gray-700 hidden' />
                        </NavLink>
                        <NavLink to='/auth' className='flex flex-col items-center gap-1'>
                            <p>AUTH</p>
                            <hr className='w-2/4 border-none h-[1.7px] bg-gray-700 hidden' />
                        </NavLink>
                    </>)}
                    {isUserLoggendIn && (
                        <>
                            <NavLink to='/user' className='flex flex-col items-center gap-1'>
                                <p>PROFILE</p>
                                <hr className='w-2/4 border-none h-[1.7px] bg-gray-700 hidden' />
                            </NavLink>
                        </>
                    )}
                    {isAdminLoggendIn && (
                        <>
                            <NavLink to='/add' className='flex flex-col items-center gap-1'>
                                <p>Add Movie</p>
                                <hr className='w-2/4 border-none h-[1.7px] bg-gray-700 hidden' />
                            </NavLink>
                            <NavLink to='/admin' className='flex flex-col items-center gap-1'>
                                <p>Profile</p>
                                <hr className='w-2/4 border-none h-[1.7px] bg-gray-700 hidden' />
                            </NavLink>
                        </>
                    )}
                </ul>
                <div>
                    {isUserLoggendIn && (
                        <>
                            <NavLink to='/' className='flex flex-col items-center gap-1'>
                                <button onClick={() => logout(false)} className='bg-[#f84464] p-2 rounded-full'>Logout</button>
                            </NavLink>
                        </>
                    )}
                    {isAdminLoggendIn && (
                        <>
                            <NavLink to='/' className='flex flex-col items-center gap-1'>
                                <button onClick={() => logout(true)} className='bg-[#f84464] p-2 rounded-full'>Logout</button>
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header