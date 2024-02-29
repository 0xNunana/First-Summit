import React from 'react'
import Image from 'next/image'
import { courseInfoProp } from '@/data/course'
const CourseCard = ({ item }: { item: courseInfoProp }) => {
  return (
    <div className='border bg-white border-gray-300 rounded-lg shadow-md group relative'>
      <Image src={item.image} alt='course' height={200} width={500} className='w-full rounded-t-lg max-sm:h-[200px] group-hover:opacity-80' />
      <div className='p-4'>
        <p className='font-bold md:text-xl'>{item.title}</p>

      <ul className=' bg-white p-2 rounded-t-lg list-inside list-disc'>
        <p className='font-semibold'>Job Opportunities</p>
        <hr className='space-y-2'/>
      {item.jobOpportunities.map((detail, i) => (
            <div key={i} className='pt-2'>
              <li className='max-sm:text-sm text-gray-700 '>{detail}:</li>
           
            </div>
          ))}
   
      </ul>
      
      </div>
   
      <ul className='hidden list-inside group-hover:block absolute bottom-0 bg-white px-5 py-2 rounded-t-lg list-disc'>
        {item.details.map((detail, i) => (
          <div key={i} className='md:p-2 lg:p-4'>
            <p className='max-sm:text-sm font-bold'>{detail.title}:</p>
            <li className='max-sm:text-xs text-gray-700'>{detail.description}</li>
          </div>
        ))}
      </ul>

    </div>
  );
};

export default CourseCard