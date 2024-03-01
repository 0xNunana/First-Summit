'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [clicked,setClicked] =useState('Home')
  return (
   <nav className='bg-[#7168c8] sticky top-0 z-50   '>
<div className=' flex justify-between  items-center  py-6 px-5 text-white max-w-screen-2xl mx-auto'>
    {/* Logo */}
    <div>
<p className='text-2xl md:text-3xl font-extrabold tracking-widest'>First Summit IT</p>
    </div>

    {/* sections */}
    <ul className='hidden md:flex space-x-5 font-medium  items-center '>
        <Link href='#home'  onClick={()=>setClicked('Home')} className={`${clicked==='Home'? 'bg-white/20 px-3 py-2 rounded-md':''}`}>
        <li >Home</li>
        </Link>
    
     <Link href='#about' onClick={()=>setClicked('About')} className={`${clicked==='About'? 'bg-white/20 px-3 py-2 rounded-md':''}`}>
     <li >About</li>
     </Link>
     <Link href='#courses'  onClick={()=>setClicked('Courses')} className={`${clicked==='Courses'? 'bg-white/20 px-3 py-2 rounded-md':''}`}>
     <li>All Courses</li>
     </Link>
     <Link href='#contact'  onClick={()=>setClicked('Contact')} className={`${clicked==='Contact'? 'bg-white/20 px-3 py-2 rounded-md':''}`}>
     <li >Contact</li>
     </Link>
      
     
    
    </ul>

    {/* classroom link */}
    <Link href='/' className='bg-green-500 px-4 py-2 md:px-5 md:py-3 rounded-md '>
    <p className='font-semibold'>Classroom</p>
    </Link>
</div>
   </nav>
  )
}

export default Header