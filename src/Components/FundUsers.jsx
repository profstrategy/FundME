import React from 'react'

const FundUsers = ({ surname, last_name, image, address }) => {
  return (
    <div>
      <ul className='flex justify-between px-2 lg:w-10/12 w-4/6 m-auto items-center rounded-md mt-1 bg-[#1C1D24] border-y-[1px] border-stone-950'>
        <img src={image} className='rounded-full' />
        <li className='text-white list-none text-md'>{surname}</li>
        <li className={`text-white list-none text-[.8rem] ${address.city ? 'text-[#002190]' : ''}`}><span className='text-white text-[.7rem]'></span> {address.city}</li>
      </ul>
    </div>
  )
}

export default FundUsers
