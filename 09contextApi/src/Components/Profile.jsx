import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {

    const {user} = useContext(UserContext)
    {
    if (!user)  return <div className='text-red-600 text-3xl font-mono bg-black p-1'>Please Login!</div>

    return <h2 className='text-white text-3xl font-bold p-1 bg-gray-800'>Welcome : {user.username} </h2>
    }
}

export default Profile
