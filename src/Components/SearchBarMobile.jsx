import React from 'react'
import { Outlet } from 'react-router-dom'
import { FundMeProvider } from '../Context/FundMeContext'
import SideBarNav from './SideBarNav'

const SearchBarMobile = ({ children }) => {
  return (
    <FundMeProvider>
      <div className={`bg-[#0D0D0D] border-t-[1px] border-[#6D7D93] shadow-sm w-full shadow-[#6D7D93] h-45 grid grid-cols-1 grid-flow-row max-sm:hidden`}>
        <h5 className='text-white text-center'>Connect with friends here!!</h5>
        <SideBarNav
          sidestyles='px-5 py-1 text-sm'
        />
        {children}
        <Outlet />
      </div>
    </FundMeProvider>
  )
}

export default SearchBarMobile
