import Link from 'next/link'
import React from 'react'

import { FaEnvelope, FaFacebookF, FaPhone } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='bg-black/90  ' id='contact'>
    <div className='  text-white py-7 px-2 max-w-screen-2xl mx-auto space-y-4'>
<div className='grid md:grid-cols-3 mb-2 '>
<div className='flex items-center'>
  <p className='text-white text-3xl font-bold'>First Summit IT</p>
</div>

{/* socials */}
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


{/* contact */}
<ul className='text-white flex md:justify-center items-center'>
  <div>
  <Link href='tel:+14694501953'>
<li className='flex gap-2 items-center'>
  <FaPhone/>
  <p>+14694501953</p></li>
</Link>

<Link href='tel:+14055098870'>
<li className='flex gap-2 items-center'>
  <FaPhone/>
  <p>+14055098870</p>
</li>
</Link>
<Link href='mailto:support@firstsummitit.com'>
  <li className='flex gap-2 items-center'>
    <FaEnvelope/>
    <p>support@firstsummitit.com</p>
</li>
</Link>
  </div>


</ul>
</div>


<hr/>
        <p className='text-center text-white py-3'>&copy; 2024 First Summit IT. All Rights Reserved.</p>
          

        </div>

        
       
        </footer>
  )
}

export default Footer