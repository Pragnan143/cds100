import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='h-16 w-full flex align-center justify-between bg-cyan-500 p-6'>
        <div className='flex items-center justify-center text-white text-2xl'>Carrer services</div>
        <div className=' flex items-center gap-7 justify-center h-full w-auto font-semibold  text-center text-white pr-4'>

            <Link to="/career" className='p-1 cursor-pointer'>Career</Link>
            <Link to="/signin" className='p-1 text-cyan-700 cursor-pointer' >Login</Link>
            <Link to="/signup" className='p-1 text-violet-700 cursor-pointer'>Signup</Link>
        </div>
    </div>
  )
}

export default Navbar