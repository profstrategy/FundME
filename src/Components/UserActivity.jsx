import React from 'react'
import { useSelector } from 'react-redux';
import ButtonScope from './ButtonScope';

const UserActivity = () => {
    const { profile} = useSelector(store => store.data)
const { last_name } = profile
    
  return (
    <div>
     <span className='text-[.7rem] grid justify-center'>Add {last_name} as friend before any activities</span>
     <ButtonScope
     styles={`m-auto py-2 px-3 grid justify-center`}
     >Add {last_name}</ButtonScope>
     <div>
        {/* <ButtonScope>Borrow</ButtonScope>
        <ButtonScope>Deposit</ButtonScope>
        <ButtonScope></ButtonScope> */}
     </div>
    </div>
  )
}

export default UserActivity
