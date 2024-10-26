import React from 'react'
import AuthImg from '../../assets/auth.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e) => {setUserData({...userData,[e.target.name]:e.target.value})}
  const submit = () => {
    console.log(userData)
    if(userData.email=="test@gmail.com" && userData.password=="123456"){
      navigate('/career')
    }
    navigate('/career')

  }
  return (
    <div className='h-screen w-screen flex items-center justify-between'>
    <div className='m-5 mx-28 h-[390px] w-[35%] bg-gradient-to-r from-cyan-500 to-blue-500  p-5 flex flex-col gap-4 align-center justify-center  border-2  rounded-lg'>
      <h1 className="text-white text-3xl font-bold text-center">Sign In</h1>
       <form className="flex flex-col gap-2">
                      <div className="w-full flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input
                          type="text"
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
                          className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-cyan-400" required
                        />
                      </div>
                      <div
                        className="w-full text-center  bg-cyan-600 hover:bg-cyan-500 text-white px-2 rounded-lg py-2 my-5 cursor-pointer"
                        onClick={submit}
                      >
                        Sign In
                      </div>
                    </form>
                </div>
                <div className='h-[95%] w-[50%] flex justify-end'><img src={AuthImg} alt='auth'/></div>
    </div>
  )
}

export default Login