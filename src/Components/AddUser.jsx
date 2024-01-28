import React from 'react'

import { ButtonScope } from '../Components'
const AddUser = ({ openAddUser ,showBorrowBank, showBorrowFriend, showDeposit}) => {
  return (
    <>
      {openAddUser &&
        < div className={`bg-white rounded-md py-3 mb-3 lg:w-5/6 md:w-5/6 w-full m-auto ${showBorrowBank || showBorrowFriend || showDeposit ? 'grid m-auto grid-cols-1 lg:w-5/6 max-sm:grid-cols-1' : ''}`} >

          <form className={`w-full grid gap-3 bg-white py-3 h-auto `}>
            <h1 className='text-xl mx-8'>ADD YOUR FRIENDS </h1>
            <input type='text' placeholder='name of user' className='w-5/6 m-auto grid py-2 bg- shadow-md shadow-slate-200 border-slate-950 border-2 rounded' />

            <input type='text' className='w-5/6 m-auto grid shadow-md shadow-slate-200 border-slate-950 border-2 rounded py-2 mb-3' placeholder='amount to deposit' />
            <label className='px-9 text-blue-500'>Not required</label>
            <input type='text' className=' w-5/6 m-auto grid shadow-md shadow-slate-200 border-slate-950 border-2 rounded py-2 mb-3' placeholder='https://i.pravatar' disabled />

          </form>

          <div className='grid justify-end px-10'>
            <ButtonScope
              ml='1'
            >ADD</ButtonScope>
          </div>
        </div >
      }
    </>
  )
}

export default AddUser
