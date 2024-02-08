import React from 'react'
import { search } from '../assets'

const SearchFriends = ({placeholder, onChange, value }) => {
    return (
        <div className='flex justify-center items-center'>

            <input placeholder={placeholder} type='text' className='py-2 lg:w-2/5 md:w-4/6  w-5/6 fixed rounded-md  border-white-900 bg-stone-950 text-white outline-none opacity-90 shadow-zinc-700  shadow-md focus:scale-y-110 text-justify px-1' value={value} onChange={onChange} />

            <img src={search} className=' fixed right-20 xl:inset-x-2/3 lg:inset-x-2/3 md:inset-x-3/4' />
        </div>
    )
}

export default SearchFriends
