import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
   <nav className='bg-[#7168c8] sticky top-0 z-50   '>
<div className=' flex justify-between  items-center  py-6 px-2 text-white max-w-screen-2xl mx-auto'>
    {/* Logo */}
    <div>
<p className='text-3xl font-bold tracking-widest'>First Summit IT</p>
    </div>

    {/* sections */}
    <ul className='hidden md:flex space-x-5 font-medium '>
        <Link href='/'>
        <li>Home</li>
        </Link>
     <Link href='#courses'>
     <li>All Courses</li>
     </Link>
     <Link href='#about'>
     <li>About</li>
     </Link>
     <Link href='#contact'>
     <p>Contact</p>
     </Link>
      
     
    
    </ul>

    {/* classroom link */}
    <Link href='/' className='bg-green-500 px-5 py-3 rounded-md '>
    <p className='font-semibold'>Classroom</p>
    </Link>
</div>
   </nav>
  )
}

export default Header