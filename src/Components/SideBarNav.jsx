import React from 'react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { DataProvider } from '../features/fetchSlice/fetchUsers'
import { UseFundMe } from '../Context/FundMeContext';
import { arrowLeft } from '../assets';


const SideBarNav = ({ sidestyles, navstyles }) => {
  const { dispatch } = UseFundMe()
  const dispatcher = useDispatch()

  const className = classNames({
    "bg-[#1C1D24]": true,
    "list-none": true,
    "text-white": true,
    "w-3/6": true,
    "iphonesm:w-3/6": true,
    "tablet:w-3/6": true,
    "md:w-5/6": true,
    "lg:w-5/6": true,
    "z-50": true
  }

  )
  return (
    <>
      {<>
        <div className={`${className} ${navstyles} m-auto rounded-md shadow-sm shadow-[#6D7D93]`}>
      
          <div className='flex justify-around h-10 items-center'>
            <NavLink to={'fundmefriends'} className='fundmefriends'>
              <li className={`${sidestyles} border-[2px] border-white rounded-md`}>
                Friends
              </li>
            </NavLink>

            <NavLink to={'fundmeusers'} className='fundmeusers'>
              <li className={` ${sidestyles} border-[2px] border-white rounded-md`} onClick={() => {dispatcher(DataProvider())
               dispatch({ type: 'arrowBacktoFriends', payload: arrowLeft })
              }} >
                Users
              </li>
            </NavLink>
          </div>
        </div>
        <div>
        </div>
      </>
      }</>
  )
}

export default SideBarNav
