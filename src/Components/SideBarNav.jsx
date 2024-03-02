import React from 'react'
import classNames from 'classnames'
import { useNavigate, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { arrowLeft } from '../assets'
import { DataProvider } from '../features/fetchSlice/fetchUsers'

const SideBarNav = ({ sidestyles, navstyles }) => {
  const navigate = useNavigate()
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
          <img src={arrowLeft} className={`object-contain tablet:fixed iphonesm:fixed tablet:top-2 tablet:right-2 tablet:w-8 iphonesm:w-8  iphonesm:top-2 iphonesm:right-2`} onClick={() => navigate(-1)}/>
            <NavLink to={'fundmefriends'} className='fundmefriends'>
              <li className={`${sidestyles} border-[2px] border-white rounded-md`} onClick={() => {  
                }}>
                Friends
              </li>
            </NavLink>
         
            <NavLink to={'fundmeusers'} className='fundmeusers'>
              <li className={` ${sidestyles} border-[2px] border-white rounded-md`} onClick={() => {
                dispatcher(DataProvider())
              }
              }>
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
