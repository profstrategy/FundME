import React from 'react';
import Modal from './Modal';

const UserProfile = ({ user }) => {
    return (
        <div className='py-3 h-full px-3'>
            {user.map((user, index) => (
                <>
                    <li className='list-none flex text-initial justify-between px-2 items-center bg-gray-950 rounded-lg mt-2'>
                        <img key={index + `${user.id}`} className='rounded-full' src={user.image} />
                        <h5 key={index + `${user.id}`} className='text-white'>{user.name}</h5>
                        <img src={user.icon} />
                    </li>

                    <Modal>
                        <div className='w-full col-end-3 flex flex-col h-auto gap-1 px-3 bg-stone-50 py-2 rounded-md shadow-lg shadow-zinc-500 mt-2'>
                            
                        <botton className='hover:bg-zinc-300 text-center cursor-pointer rounded-md px-2 border-b-2'>Borrow from friend</botton>
                        <botton className='hover:bg-zinc-300 text-center cursor-pointer rounded-md px-2 border-b-2 transition ease-in-out delay-150'>Borrow from Bank</botton>
                        <botton className='hover:bg-zinc-300 text-center cursor-pointer rounded-md px-2 border-b-2 transition ease-in-out delay-150'>Make a Deposit</botton>
                        </div>
                    </Modal>
                    <div className='grid grid-cols-2 w-full items-center shadow-lg shadow-zinc-500 mt-2 px-2'>
                        <p key={index + `${user.id}`} className={`${user.balance <= 10 ? 'text-red-500' : 'text-black'}`}>X account balance is ${user.balance}</p>

                        <h6 className={`col-end-3 text-end text-xs ${user.balance <= 10 ? 'text-red-500' : 'text-blue-500' }`}>{user.balance <= 10 ? 'Low balance' : 'Normal'}</h6>
                    </div>

                </>
            ))}
        </div>
    )
}

export default UserProfile
