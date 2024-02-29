import React from 'react'
import Image from 'next/image'
import { courseInfoProp } from '@/data/course'

const CourseCard = ({item}:{item:courseInfoProp}) => {
  return (
    <div className='border bg-white border-gray-300 rounded-lg  shadow-md hover:opacity-80'  >
    <Image src={item.image} alt='course' height={200} width={500} className='w-full rounded-t-lg max-sm:h-[200px]  '/>
<div className='p-4  '>
    <p className='font-semibold md:text-xl'>{item.title}</p>
</div>
</div>
  )
}

export default CourseCard