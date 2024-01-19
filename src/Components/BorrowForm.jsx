import React from 'react'

const BorrowForm = ({ user }) => {
  return (
    <div className='bg-white col-span-1 h-fit'>
        {user.map((user, index) => (
            <>
                <li className='list-none flex text-initial justify-between'>
                    <img key={index + `${user.id}`} className='rounded-full' src={user.image} />
                    <h5 key={index + `${user.id}`}>{user.name}</h5>
                </li>
                <p key={index + `${user.id}`}>{user.balance}</p>
                
                </>
        ))}
    </div>
  )
}

export default BorrowForm
