import React from 'react'
import Image from 'next/image'


const About = () => {
  return (
    <section className=' -mt-20  lg:-mt-56 relative' id='about'>
      <ul className='bg-slate-100 border-blue-500 border border-dashed shadow-md rounded-xl grid md:grid-cols-2 lg:grid-cols-4 text-xl gap-3 justify-around py-2 md:py-5 px-5 max-w-screen-2xl max-sm:mx-3 mx-auto z-30'>
<li className='flex gap-3 items-center md:justify-center'>
<Image src='/time.svg' alt='time' height={100} width={100} className='w-6 h-6 md:w-9 md:h-9  lg:w-12 lg:h-12'/>
  <p className='tracking-wide max-sm:text-base'>  5 months of intensive training</p>
</li>

<li className='flex gap-3 items-center md:justify-center'>
<Image src='/interview.svg' alt='interview' height={100} width={100} className='w-6 h-6 md:w-9 md:h-9  lg:w-12 lg:h-12'/>
  <p  className='tracking-wide max-sm:text-base'>  Interview Preparation</p>
</li>
<li className='flex gap-3 items-center md:justify-center'>
<Image src='/cv.svg' alt='cv' height={100} width={100} className='w-6 h-6 md:w-9 md:h-9  lg:w-12 lg:h-12'/>
  <p  className='tracking-wide max-sm:text-base'> Resume Building</p>
</li>

<li className='flex gap-3 items-center md:justify-center'>
<Image src='/support.svg' alt='support' height={100} width={100} className='w-6 h-6 md:w-9 md:h-9  lg:w-12 lg:h-12'/>
  <p  className='tracking-wide max-sm:text-base'>  On-the-job support</p>
</li>






      </ul>
    <div className=' grid md:grid-cols-2 gap-3 py-10 px-2 max-w-screen-2xl mx-auto '>

    
    
    {/* image */}
    <div className='hidden md:flex justify-center'>
    <Image src='/data.png' height={1000} width={1000} alt='hero image'/>
    </div>

        
    {/* text */}
    <div className=' p-5 flex items-center '>
      <div className='space-y-10' >
      <p className='text-4xl md:text-5xl lg:text-6xl font-extrabold  tracking-wider'>First Summit <span className='text-[#665ad2]'>IT</span></p>
    <p className='lg:text-xl lg:max-w-[70%] text-neutral-600'>We provide world-class hands-on training course that are tailors to the needs of ever changing tech landscape. Our courses are 
designed to produce a balance between knowledge, application and practicality. All courses are designed for flexibility but each 
of them having a unique flow to help takers acheive their goals.</p>
<p className='lg:text-xl lg:max-w-[70%] text-neutral-600'>Whether you are looking to upskill yourself, switch careers or start a new one, our courses are made for you. <span className='font-semibold animate-pulse '>Get in touch TODAY!</span></p>
    
      </div>
    
    </div>
    
    </div>
    </section>
  )
}

export default About