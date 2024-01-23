import React, { useState } from 'react';

import { user, angleDown } from '../assets';
import { ButtonScope, Cover } from '../Components'
import { initialUsers } from '../Contents/content'


const UserProfile = ({ id, image, name, balance, icon, handleShowBorrowFriend }) => {

  const [openModal, setOpenModal] = useState(false)
  const [iconList, setIconList] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(openModal => !openModal)
    setIconList(!iconList)
  }

  return (
    <div className='py-3 px-3'>
      <>
        <li className='list-none flex text-initial justify-between px-2 items-center bg-gray-950 rounded-lg mt-2' key={id}>
          <img className='rounded-full' src={image} />
          <h5 className='text-white'>{name}</h5>
          <img src={`${iconList ? angleDown : icon}`} onClick={handleOpenModal} className='cursor-pointer' />
        </li>
        {openModal &&
          <div className='grid grid-cols-1'>
            <div className='w-full col-end-3 flex flex-col h-auto gap-1 px-3 bg-stone-50 py-2 rounded-md shadow-lg shadow-zinc-500 mt-2'>

              <li className='hover:bg-zinc-300 text-center cursor-pointer rounded-md px-2 border-b-2 list-none' onClick={handleShowBorrowFriend}>Borrow from friend</li>
              <li className='hover:bg-zinc-300 text-center cursor-pointer rounded-md px-2 border-b-2 transition ease-in-out delay-150 list-none'>Borrow from Bank</li>
              <li className='hover:bg-zinc-300 text-center cursor-pointer rounded-md px-2 border-b-2 transition ease-in-out delay-150 list-none'>Make a Deposit</li>
            </div>
          </div>
        }

        <div className='grid grid-cols-2 w-full items-center shadow-lg shadow-zinc-500 mt-2 px-2'>
          <p className={`${balance <= 10 ? 'text-red-500' : 'text-black'}`}>X account balance is ${balance}</p>

          <h6 className={`col-end-3 text-end text-xs ${balance <= 10 ? 'text-red-500' : 'text-blue-500'}`}>{balance <= 10 ? 'Low balance' : 'Normal'}</h6>
        </div>

      </>
    </div>
  )
}

const User = ({ handleUserOpen, handleShowBorrowFriend, ShowBorrowFriend }) => {

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
      <div className={`bg-white col-span-1 ${ShowBorrowFriend ? '' : ''} rounded-lg h-auto w-full shadow-md shadow-zinc-300 pb-3`}>
        <div className='flex justify-between items-center px-2 border-b-2 h-10'>
          <h1 className='col-end-2'>Users</h1>
          <img src={user} alt='user' className='col-start-7 object-contain' />
        </div>
        {initialUsers.map((user) => (
          <UserProfile {...user} key={user.id} handleShowBorrowFriend={handleShowBorrowFriend} />
        ))}

        <div className='grid justify-end px-3'>
          <ButtonScope
            onClick={handleUserOpen}
          >ADD USERS</ButtonScope>
        </div>
      </div>
    </div>
  )
}


export default User
