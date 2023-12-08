import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <>
    <nav className="bg-orange-600 border-gray-200 px-4 lg:px-6 py-2.5">
      <div  className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div className='className="flex items-center lg:order-2"'>
        <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
            <li className='block py-2 pr-4 pl-3 duration-200 border-b'>
                <Link className= "text-black" to="/">
                    Home    
                </Link>
            </li>
            <li className='block py-2 pr-4 pl-3 duration-200 border-b'>
                <Link to="/about">
                   About
                </Link>
            </li>
            <li className='block py-2 pr-4 pl-3 duration-200 border-b'>
                <Link to="/contact">
                    Contact
                </Link>
            </li>
          
        </ul> 
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header
