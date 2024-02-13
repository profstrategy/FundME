import React from 'react'
import { search } from '../assets'

const SearchFriends = ({placeholder, onChange, value, marginY }) => {
    return (
        <div className='flex justify-center items-center relative'>

            <input placeholder={placeholder} type='text' className={`py-2 lg:w-2/6 md:w-4/12  w-4/6  rounded-md  border-white-900 bg-stone-950 text-white outline-none opacity-90 shadow-zinc-700  shadow-md focus:scale-y-110 text-justify px-1 relative mt-${marginY}`} value={value} onChange={onChange} />

            {/* <span><img src={search} className={`absolute`} /></span> */}
        </div>
    )
}

export default SearchFriends
