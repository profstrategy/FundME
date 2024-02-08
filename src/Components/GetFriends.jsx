import React from 'react'
import ButtonScope from './ButtonScope'
import { fundCard } from '../assets'

const GetFriends = () => {
  return ( 
    <div className='bg-[#0D0D0D] relative h-60 mt-10 border-y-[1px] border-[#6D7D93] flex flex-col justify-center items-center gap-7 mt-2'>
      <ButtonScope>Search fundME Users</ButtonScope>

      <img src={fundCard} className='w-3/6' />
    </div>
  )
}

export default GetFriends
