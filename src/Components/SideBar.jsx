import React from 'react'

const SideBar = ({ children }) => {
  return (
    <div className='fixed bg-[#1C1D24] min-h-screen h-auto right-0 lg:w-80 w-full md:w-60 tablet:hidden lg:block md:block xl:block iphonesm:hidden '>
     {children}
    </div>
  )
}

export default SideBar
