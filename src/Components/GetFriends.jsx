import React from 'react'
import { SideBarNav } from '../Components'
import { UseFundMe } from '../Context/FundMeContext'


const GetFriends = ({ children }) => {
  const { arrowIcon } = UseFundMe()

  return (
    <div className={`bg-[#0D0D0D] border-t-[1px] border-[#6D7D93] shadow-sm w-full shadow-[#6D7D93] h-60 grid items-center max-sm:hidden`}>
      <SideBarNav
      sidestyles='px-5 py-1'
      navstyles={'w-80'}
       />
      {children}
    </div>
  )
}

export default GetFriends
