import React, { useState } from 'react';
import { User, AddUser, BorrowForm } from './Components'
import './App.css'

function App() {
  const [openAddUser, setOpenAddUser] = useState(false)
  const [showBorrowFriend, setShowBorrowFriend] = useState(false)
  const handleUserOpen = () => {
    setOpenAddUser(openAddUser => !openAddUser)
  }

  const handleShowBorrowFriend = () => {
    setShowBorrowFriend(showBorrowFriend => !showBorrowFriend)
  }


  return (
    <div className=' bg-black'>
      <div className={`mt-16 md:mt-20`}>
        <div className={`grid md:grid-cols-2  justify-center w-5/6 sm:w-5/6 md:w-3/6 m-auto lg:w-4/6 gap-5  ${showBorrowFriend ? 'md:imgRight' : 'md:imgLeft'}`}>

          <User handleUserOpen={handleUserOpen} handleShowBorrowFriend={handleShowBorrowFriend} showBorrowFriend={showBorrowFriend}/>

          <BorrowForm showBorrowFriend={showBorrowFriend}/>
        </div>
      </div>

      <div className='sm:grid md:grid-cols-2 sm:w-5/6 sm:grid-flow-col  w-5/6 sm:w-5/6 md:w-3/6 m-auto lg:w-4/6 mt-5'>
        <AddUser openAddUser={openAddUser} />
      </div>
    </div>
  )
}

export default App
