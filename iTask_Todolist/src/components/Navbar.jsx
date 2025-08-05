import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-blue-900 text-white py-2.5'>
        <div className="logo">
            <span className='font-bold text-xl mx-8'>iTask</span>
        </div>
        <ul className='flex gap-20'>
            <li className='cursor-pointer hover:font-bold duration-50'>Home</li>
            <li className='cursor-pointer hover:font-bold duration-50'>About</li>
            <li className='cursor-pointer hover:font-bold duration-50'>Contact us</li>
        </ul>
    </nav>
  )
}

export default Navbar
