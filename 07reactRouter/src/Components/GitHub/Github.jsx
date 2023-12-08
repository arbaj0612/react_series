import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData() 
              //OR
    // const [data , setData] = useState([])
    // useEffect(()=> {
    //     fetch("https://api.github.com/users/arbaj0612")
    //     .then( response => response.json())
    //     .then( data=> {
    //         setData(data)
    //     })
    // }, [])
  return (
    <>
      <div className='text-center m-4 bg-gray-600 text-white p-4  text-3xl'>
            GitHub Follwers: {data.followers}
      <img src={data.avatar_url} alt='gitpic' width={300} />  
      </div>
    </>
  )
}

export default Github

export const githubLoader = async ()=> {
    const response = await fetch("https://api.github.com/users/arbaj0612")
    return response.json()
}