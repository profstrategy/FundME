import React from 'react'
import classNames from 'classnames';

const SearchFriends = ({ placeholder, onChange, value, marginY }) => {
  const inputClasses = classNames(
    'py-2',
    'lg:w-full',
    'md:w-full',
    'w-4/6',
    'rounded-md',
    'border-white-900',
    'bg-stone-950',
    'text-white',
    'outline-none',
    'opacity-90',
    'shadow-zinc-700',
    'shadow-md',
    'focus:scale-y-110',
    'text-justify',
    'px-1',
    `mt-${marginY}`
  );

  return (
    <div className='flex justify-center items-center relative'>
      <input
        placeholder={placeholder}
        type='text'
        className={inputClasses}
        value={value}
        onChange={onChange}
      />
      {/* <span><img src={search} className={`absolute`} /></span> */}
    </div>
  );
};

export default SearchFriends;
