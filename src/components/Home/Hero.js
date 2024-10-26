import React from 'react'
import { Link } from "react-router-dom";
import HeroImg from '../../assets/image.jpg'
const Hero = () => {
  return (
    <section >
        <div className='flex items-center justify-between m-8 my-10 p-10'>
            
            <div className='flex flex-col gap-2'>
                <h1 className=' text-5xl font-extrabold'>Are You Stuggling with Your Carrer ?</h1>
                <p className=' text-xl font-normal text-gray-500'>Find the best Carrier Guaidance and Roadmaps for confused mind to boost your <br/>passion forward</p>
                <br/>
                <div className='flex gap-5'>
                <Link to="/signup" className=''> 
                    <button className='h-16 w-36 bg-cyan-700 text-white text-xl font-medium rounded-xl flex items-center justify-center hover:bg-cyan-800'>Sign Up</button>
                     <p lassName='text-sm font-light text-gray-100'>*So what are you waiting for bang button </p>
                 </Link> 
                <div>
                <Link to="/signin" className=''>
                    <button className='h-16 w-36 bg-cyan-900 text-white text-xl font-medium rounded-xl flex items-center justify-center hover:bg-cyan-800' 
                   >Sign In</button>
                    <p lassName='text-sm font-light text-gray-100'>*Already Having an Account? </p>
                </Link>
                </div>
                </div>
            </div>
            <div className='hero-img'>
                <img src={HeroImg} alt="hero-img" />
            </div>
        </div>
        
    </section>
  )
}

export default Hero