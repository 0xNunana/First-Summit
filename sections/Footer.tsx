import Link from 'next/link'
import React from 'react'

import { FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='bg-black/90  ' id='contact'>
    <div className='  text-white py-7 px-2 max-w-screen-2xl mx-auto space-y-4'>
<div className='grid md:grid-cols-3 mb-2 '>
<div>
  <p className='text-white text-3xl font-bold'>First Summit</p>
</div>
<div className='flex md:justify-center gap-10  py-5 items-center '>
  <Link href=''>
    <FaFacebookF className='h-5 w-10'/>
  </Link>
  <Link href=''>
    <LuInstagram className='h-5 w-10'/>
  </Link>
  <Link href=''>
  <FaXTwitter className='h-5 w-10'/>
  </Link>
</div>
<ul className='text-white flex items-center'>
  <div>
  <Link href='tel:+14694501953'>
<li>+14694501953</li>
</Link>
<Link href='tel:+14055098870'>
<li>+14055098870</li>
</Link>
<Link href='mailto:support@firstsummitit.com'>
  <li>support@firstsummitit.com</li>
</Link>
  </div>


</ul>
</div>


<hr/>
        <p className='text-center text-white py-3'>&copy; 2024 First Summit Tech. All Rights Reserved.</p>
          

        </div>

        
       
        </footer>
  )
}

export default Footer