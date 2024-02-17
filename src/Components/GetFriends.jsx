import React from 'react'
import { fundCard } from '../assets'
import { ButtonScope } from '../Components'
import { NavLink } from 'react-router-dom'

const GetFriends = ({children}) => {
  return ( 
    <div className={`h-60 border-y-[1px] border-[#6D7D93] flex flex-col justify-center items-center gap-7 mt-2 max-sm:hidden`}>
    {/* <Link to={"userfriends"}><ButtonScope
     styles={'px-3 py-2'}
     >Search Users</ButtonScope></Link> */}
     <div className='flex'>
     <li className='text-white'>
        <NavLink to={'usersfriends'}>Friends</NavLink>
      </li>

      <li className='text-white'>
        <NavLink to={'fundmefriends'}>Users</NavLink>
      </li>
      {children}
     </div>

      <img src={fundCard} className='w-3/6' />
    </div>
  )
}

export default GetFriends
