import React from 'react';
import { Link } from 'react-router-dom';

import { usernav, briefcase, dropbox, close, menu, search } from '../assets';
import { UseFundMe } from '../Context/FundMeContext';

const Navbar = () => {
    const { navbar, dispatch } = UseFundMe()
    return (
        <>

            {navbar &&
                <div className='min-h-screen bg-stone-950 shadow-zinc-700 shadow-lg fixed left-0 w-12 grid grid-rows-1 py-10 z-50'>
                    <ul className='text-white text-[.8rem] list-none flex flex-col gap-7'>
                        <li className=' hover:bg-gray-700 py-2 rounded-full cursor-pointer'>
                            <img src={usernav} className='m-auto' />
                            <em className='grid justify-center' >Friends</em>
                        </li>

                        <li className=' hover:bg-gray-700 py-2 rounded-full cursor-pointer'>
                            <img src={briefcase} className='m-auto' />
                            <em className='grid justify-center'>Bank</em>
                        </li>

                        <li className=' hover:bg-gray-700 py-2 rounded-full cursor-pointer'>
                            <img src={dropbox} className='m-auto' />
                            <em className='grid justify-center'>Deposit</em>
                        </li>

                        <Link to='/getfriends'>
                            <li className=' hover:bg-gray-700 py-2 rounded-full cursor-pointer lg:hidden max-sm:visible'>
                                <img src={search} className='m-auto' />
                                <em className='grid justify-center'>Search</em>
                            </li>
                        </Link>
                    </ul>

                    <h1 className='text-white'>hi</h1>
                </div>}


            <img src={`${navbar ? close : menu}`} className={`z-50   ${navbar ? 'fixed left-3 top-3' : 'fixed left-2 '} bg-gray-700 rounded-full p-1 top-1`} onClick={() => dispatch({ type: "navbar" })} />

        </>
    )
}

export default Navbar
