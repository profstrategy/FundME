import React from 'react';
import { useState } from 'react';

import { usernav, briefcase, dropbox, close, menu } from '../assets';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

     function handleIsOpen () {
        setOpen(isopen => !isopen)
     }

    return (
        <>
            
               { isOpen &&
                <div className='min-h-screen bg-stone-950 shadow-zinc-700 shadow-lg fixed left-0 w-12 grid grid-rows-1 py-10'>
                    <ul className='text-white text-[.8rem] list-none flex flex-col gap-7'>
                        <li className=' hover:bg-gray-700 py-2 rounded-full cursor-pointer'>
                            <img src={usernav} className='m-auto' />
                            <em className='grid justify-center'>Friends</em>
                        </li>
                        <li className=' hover:bg-gray-700 py-2 rounded-full cursor-pointer'>
                            <img src={briefcase} className='m-auto' />
                            <em className='grid justify-center'>Bank</em>
                        </li>
                        <li className=' hover:bg-gray-700 py-2 rounded-full cursor-pointer'>
                            <img src={dropbox} className='m-auto' />
                            <em className='grid justify-center'>Deposit</em>
                        </li>
                    </ul>

                    <h1 className='text-white'>hi</h1>
                </div>}

                
                    <img src={`${isOpen ? close : menu}`} className={`z-50   ${isOpen ? 'fixed left-14' : 'fixed left-3 '} bg-gray-700 rounded-full p-1 top-1`} onClick={handleIsOpen}/>
               
        </>
    )
}

export default Navbar
