import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {

    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = () => {
        setUser({username , password})
    }

  return (
    <>
      <div className='bg-black'>
        <h2 className='text-white text-center p-1 text-3xl shadow-xl'>Login form</h2>
      </div>
      <div className='m-4 p-2'>
        <input type="text"
            className='mx-4 p-1 border border-gray-700'
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value) }

        />
        <input type="text"
            placeholder='password'
            className='mx-4 p-1 border border-gray-700'
            value={password}
            onChange={(e) => setPassword(e.target.value) }

        />

        <div>
            <button 
            onClick={handleSubmit} 
            className="btn bg-neutral-900
             text-white m-4 p-2" >
                
             Submit
            </button>
        </div>
      </div>
    </>
  )
}

export default Login
