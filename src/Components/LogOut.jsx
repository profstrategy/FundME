import React from 'react'
import ButtonScope from './ButtonScope'

const LogOut = () => {
  return (
    <div className='min-h-3 mb-1 py-3'>
      <div className='flex m-auto bg-[#0D0D0D] rounded-md px-2 flex-wrap w-5/6 iphonesm:hidden py-2 items-center justify-around shadow-sm shadow-[#6D7D93]'>
            <img src='https://i.pravatar.cc/48?u=499476' className='object-contain w-7 rounded-full' />
        <h6 className='text-white text-[.7rem]'>Welcome,</h6><span className='text-slate-400 text-[.6rem]'>Abdul</span>
        <ButtonScope
        styles={'py-[3px] px-[5px] rounded-[3px] text-sm'}
        >Logout</ButtonScope>
      </div>
    </div>
  )
}

export default LogOut
