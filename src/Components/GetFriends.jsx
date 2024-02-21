import React from 'react'
import { SideBarNav } from '../Components'
import { UseFundMe } from '../Context/FundMeContext'


const GetFriends = ({ children }) => {
  const { arrowIcon } = UseFundMe()

  return (
    <div className={`bg-[#0D0D0D] border-t-[1px] border-[#6D7D93] shadow-sm w-full shadow-[#6D7D93] tablet:h-32 h-40 grid grid-cols-1 grid-flow-row max-sm:hidden ${arrowIcon ? 'h-85' : ''}`}>
      {arrowIcon ? '' : <h5 className='text-white text-center'>Connect with friends here!!</h5>}
      <SideBarNav
      sidestyles='px-5 py-1 text-sm'
       />
      {children}
    </div>
  )
}

export default GetFriends
