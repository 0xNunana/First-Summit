import CourseCard from '@/components/CourseCard'
import { courseInfo } from '@/data/course'

import React from 'react'

const Courses = () => {
  return (
    <section className='  bg-slate-200 ' id='courses'>
        <div className='py-4 md:py-7'>
            <p className='text-center text-4xl md:text-5xl lg:text-6xl font-bold '>
                Explore <span className='text-[#665ad2]'>Courses</span>
            </p>
        </div>
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 pt-2 pb-7 md:py-7 px-16 md:px-10 max-w-screen-2xl mx-auto'>
{courseInfo.map((item,i)=>(
    <CourseCard item={item} key={i}/>
))}



        </div>
        </section>
  )
}

export default Courses
