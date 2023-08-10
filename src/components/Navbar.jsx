import React from 'react'

function Navbar() {
  return (
    <div className='main lg:flex md:flex flex-wrap justify-between items-center 
     px-4 bg-[#F8EFBA] py-4 shadow-md'>
        <div className="left">
            <div className="logo font-bold text-2xl text-center">
            Food App
            </div>
        </div>        
        <div className="right">
            <ul className='flex space-x-4 justify-center'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
                <li className='cursor-pointer'>Services</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar