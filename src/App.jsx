import React, { useState } from 'react';
import { User, AddUser, BorrowForm, BorrowBank, BorrowScope, Deposit, Navbar } from './Components'
import './App.css'

function App() {
  const [openAddUser, setOpenAddUser] = useState(false);
  const [showBorrowFriend, setShowBorrowFriend] = useState(false);
  const [showUser, setShowUser] = useState(true);
  const [showBorrowBank, setShowBorrowBank] = useState(false)
  const [showDeposit, setShowDeposit] = useState(false)
  

  const handleUserOpen = () => {
    setOpenAddUser((prevOpenAddUser) => !prevOpenAddUser);
    setShowBorrowFriend('')
    setShowBorrowBank('')
  };

  const handleShowBorrowFriend = () => {

    window.innerWidth <= 640 ? setShowBorrowFriend((prevShowBorrowFriend) => !prevShowBorrowFriend) && setShowUser((prevShowUser) => !prevShowUser) : setShowBorrowFriend((prevShowBorrowFriend) => !prevShowBorrowFriend)

    setShowBorrowBank('')
    setShowDeposit('')
    setOpenAddUser('')
  };

  const handleShowBorrowBank = () => {

    window.innerWidth <= 640 ? setShowBorrowBank((prevShowBorrowBank) => !prevShowBorrowBank) && setShowUser((prevShowUser) => !prevShowUser) : setShowBorrowBank((prevShowBorrowBank) => !prevShowBorrowBank)

   setShowBorrowFriend('')
   setShowDeposit('')
    setOpenAddUser('')
  };

  const handleShowDeposit = () => {

    window.innerWidth <= 640 ? setShowDeposit((prevShowDeposit) => !prevShowDeposit) && setShowUser((prevShowUser) => !prevShowUser) : setShowDeposit((prevShowDeposit) => !prevShowDeposit)

    setShowBorrowBank('')
    setShowBorrowFriend('')
    setOpenAddUser('')
  };
  return (
    <div className=' bg-black'>
<Navbar />
      <div className={`mt-16 md:mt-20`}>
        <div
          className={` w-5/6 sm:w-5/6 md:w-4/6 m-auto lg:w-4/6 gap-5  ${showBorrowFriend || showBorrowBank || showDeposit ? 'grid grid-cols-2 lg:w-4/6 md:w-4/6 max-sm:grid-cols-1' : ''}`}
        >

          <User handleUserOpen={handleUserOpen} handleShowBorrowFriend={handleShowBorrowFriend} showBorrowFriend={showBorrowFriend} showUser={showUser} setShowUser={setShowUser} handleShowBorrowBank={handleShowBorrowBank} handleShowDeposit={handleShowDeposit} />
          <BorrowScope >
            <BorrowForm showBorrowFriend={showBorrowFriend} setShowUser={setShowUser} showUser={showUser} />
            <BorrowBank showBorrowBank={showBorrowBank} setShowUser={setShowUser}/>
            <Deposit showDeposit={showDeposit} setShowUser={setShowUser} />
          </BorrowScope>

        </div>
      </div>

      <div
        className={` sm:w-5/6 sm:grid-flow-col  w-5/6 sm:w-5/6 md:w-5/6 m-auto lg:w-5/7 mt-5 ${showBorrowFriend || showBorrowBank || showDeposit ? ' grid m-auto grid-cols-2 lg:w-4/6 max-sm:grid-cols-1' : ''
          }`}
      >
        <AddUser openAddUser={openAddUser} showBorrowBank={showBorrowBank} showDeposit={showDeposit} showBorrowFriend={showBorrowFriend} />
      </div>
    </div>
  );
}

export default App;