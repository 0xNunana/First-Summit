
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='bg-amber-200  '>
<div className=' grid md:grid-cols-2 gap-3 py-10 px-2 max-w-screen-2xl mx-auto'>

{/* text */}
<div className=' p-5 flex items-center '>
  <div className='space-y-10' >
  <p className='text-4xl md:text-5xl lg:text-6xl font-bold  tracking-wider'>Begin your Career in Database Administration, Data Science and AI with us</p>
<p className='text-xl md:max-w-[70%]'>Build practical job-ready skills with courses taught by industry experts</p>

  </div>

</div>


{/* image */}
<div className='hidden md:flex justify-center'>
<Image src='/jayhero.png' height={1000} width={1000} alt='hero image'/>
</div>

</div>
</section>
  )
}

export default Hero