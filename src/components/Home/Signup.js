import React, { useState } from 'react'
import AuthImg from '../../assets/auth.jpg'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
  })
  const handleChange = (e) => {setUserData({...userData,[e.target.name]:e.target.value})}
  const submit = () => {
    console.log(userData)
    navigate("/signin")
   
  }
  return (
    <div className='h-screen w-full flex items-center justify-between '>
    <div className='m-5 mx-28 h-[460px] w-[35%] bg-gradient-to-r from-cyan-500 to-blue-500 py-1 px-5 flex flex-col gap-4 align-center justify-center   border-2 rounded-xl'>
      <h1 className="text-white text-3xl font-bold text-center">Sign Up</h1>
       <form className="flex flex-col gap-2">
                      <div className="w-full flex flex-col gap-2">
                        <label htmlFor="username">Username</label>
                        <input
                          type="text"
                          id="email"
                          name='username'
                          value={userData.username}
                          onChange={handleChange}
                          placeholder="username"
                          className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-cyan-400" required
                        />
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name='email'
                          value={userData.email}
                          onChange={handleChange}
                          placeholder="user@email.com"
                          className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-cyan-400" required
                        />
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <label htmlFor="email">Password</label>
                        <input
                          type="password"
                          id="password"
                          name='password'
                          value={userData.password}
                          onChange={handleChange}
                          placeholder="*********"
                          className="w-full border border-gray-400 px-3 py-2 rounded-lg " required
                        />
                      </div>
                      <div
                        className="w-full text-center  bg-cyan-600 hover:bg-cyan-500 text-white px-2 rounded-lg py-2 my-5 cursor-pointer"
                        onClick={submit}
                      >
                        Sign up
                      </div>
                    </form>
    </div>
    <div className='h-[95%] w-[50%] flex justify-end'><img src={AuthImg} alt='auth'/></div>
    </div>
  )
}

export default Signup