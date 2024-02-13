import React from 'react'

const Statistics = () => {
  return (
    <div className='flex w-4/6 md:w-2/6 md:gap-10 iphonesm:gap-7 gap-28 m-auto mt-3 '>
      <div className='h-[100px] lg:w-[150px] md:w-[150px] w-5/6 bg-[#1C1D24] rounded-sm border-[1px] border-[#6D7D93] '>
        <h3 className='text-[#6D7D93] text-center'>fundME account</h3>
        <div className='grid m-auto'>
        <span className='text-[#6D7D93]  
        text-center'>Amount: </span><span className='text-center'>$0</span>
        </div>
      </div>
      <div className='h-[100px] lg:w-[150px] md:w-[150px] w-5/6 bg-[#1C1D24] m-auto rounded-sm border-[1px] border-[#6D7D93]'>
        <h3 className='text-[#6D7D93] m-auto'>User's account</h3>
        <span className='text-[#6D7D93] m-auto'>Amount: </span><span>$0</span>
      </div>

    </div>
  )
}

export default Statistics
