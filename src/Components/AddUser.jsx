import React from 'react'
import { useState } from 'react'

import { ButtonScope } from '../Components'
import { angleUp, close } from '../assets'
import { UseFundMe } from '../Context/FundMeContext'

const AddUser = () => {
const { onAddUsers, addFriends } = UseFundMe()

  const [name, setName] = useState('')
  const [balance, setBalance] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48')


  function handleAddUser (e) {
    e.preventDefault()

    if(!name || !balance || !image) return
  const id = crypto.randomUUID()

    const newUsers = {
      id : id,
      name,
      balance,
      icon: angleUp,
      image: `${image}?=${id}`,
      deleteIcon: close
    }
      setImage("https://i.pravatar.cc/48")
      setName('')
      setBalance('')

    onAddUsers(newUsers)
    console.log(newUsers)
  }
  return (
    <>
      {addFriends &&
        < div className={`rounded-md bg-[#0D0D0D] py-3 mb-3 lg:w-full tablet:w-4/6 md:w-full iphonesm:w-5/6 iphonesm:m-auto m-auto border-[1px] border-[#6D7D93]`} >

          <form className={`w-full grid gap-3 bg-[#0D0D0D] py-3 h-auto `} onSubmit={handleAddUser}>
            <h1 className='text-xl text-[#FFFFFF] md:text-lg m-auto'>ADD YOUR FRIENDS </h1>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='name of user' className='w-5/6 m-auto grid py-2 bg-[#0D0D0D] shadow-md shadow-[#0D0D0D] border-[#1C1D24] border-2 outline-none rounded text-[#FFFFFF]' />

            <input type='text' value={balance} className='w-5/6 m-auto grid py-2 bg-[#0D0D0D] shadow-md shadow-[#0D0D0D] border-[#1C1D24] border-2 outline-none rounded text-[#FFFFFF]'  placeholder='amount to deposit' onChange={(e) => setBalance(Number(e.target.value))} />
            <label className='px-9 text-blue-500'>Not required</label>
            <input type='text' value={image} className='w-5/6 m-auto grid py-2 bg-[#0D0D0D] shadow-md shadow-[#0D0D0D] border-[#1C1D24] border-2 outline-none rounded text-[#FFFFFF]'  placeholder='https://i.pravatar' onChange={(e) => setImage(e.target.value)} disabled/>

          </form>

          <div className='grid justify-end px-10'>
            <ButtonScope
              ml='1'
              onClick={handleAddUser}
            >ADD</ButtonScope>
          </div>
        </div >
      }
    </>
  )
}

export default AddUser
