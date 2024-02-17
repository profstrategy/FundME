import React from 'react'
import { Link } from 'react-router-dom'

const Statistics = () => {
  return (
    <div className='flex w-4/6 lg:w-2/6 md:w-2/6 md:gap-10 iphonesm:gap-7 lg:gap-32 gap-28 m-auto mt-3 '>
      <div className='h-[100px] lg:w-[150px] md:w-[150px] w-5/6 bg-gradient-to-r from-[#002190] to-[#002190] rounded-sm border-[1px] border-[#6D7D93] m-auto'>
      <h3 className='text-white px-3 text-sm mb-2 mt-3 '>fundME account</h3>
        <em className='px-3 text-2xl mb-2'>$xxx</em>
      </div>
      <div className='h-[100px] lg:w-[150px] md:w-[150px] w-5/6 bg-gradient-to-r from-[#002190] to-[#002190] rounded-sm border-[1px] border-[#6D7D93] m-auto'>
        <h3 className='text-white px-3 text-sm mb-2 mt-3'>X account</h3>
        <em className='px-3 text-2xl mb-2'>$xxx</em>
      </div>

    </div>
  )
}

export default Statistics
