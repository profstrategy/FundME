import React from 'react';

import { user } from '../assets';
import Cover from './Cover'

const User = ({ children }) => {

  return (
    <div>
      <Cover
        color='black'
        bgColor='white'

        paddingX='3'
      >
        <div className='flex justify-between items-center px-1'>
          <h6 className='text-blue-300'>FundME</h6>
          <div>
            <p className='text-sm'>X Bank account</p>
            <em> X balance: </em>
          </div>
        </div>
      </Cover>
      <div className='bg-white col-span-1 rounded-lg h-auto w-full shadow-md shadow-zinc-300'>
        <div className='flex justify-between items-center px-2 border-b-2 h-10'>
          <h1 className='col-end-2'>Users</h1>
          <img src={user} alt='user' className='col-start-7 object-contain' />
        </div>
        {children}

        <div>
        <button>ADD FRIEND</button>
        </div>
      </div>
    </div>
  )
}


export default User
