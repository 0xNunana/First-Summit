
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='bg-[#665ad2]  ' id='home'>
<div className=' grid md:grid-cols-2 gap-3 py-10 px-4 max-w-screen-2xl mx-auto'>

{/* text */}
<div className=' p-5 flex items-center '>
  <div className='space-y-10' >
  <p className='text-4xl md:text-5xl lg:text-6xl xl:text-7x font-black  tracking-wider text-white animate-fadeIn'>Begin your <span className='text-green-500'>Career</span> in Database Administration, Data Science and AI with us</p>
<p className='lg:text-xl md:max-w-[70%] text-white/80 animate-fadeL opacity-100'>Build practical job-ready skills with courses taught by industry experts</p>

  </div>

</div>


{/* image */}
<div className='hidden md:flex justify-center animate-fadeIn'>
<Image src='/web.png' height={1000} width={1000} alt='hero image'/>
</div>

</div>
</section>
  )
}

export default Hero