import React from 'react'
import classNames from 'classnames';

const SearchFriends = ({ placeholder, onChange, value, styles }) => {
  const inputClasses = classNames(
    'py-2',
    'lg:w-5/6',
    'md:w-5/6',
    'w-4/6',
    'rounded-md',
    'border-white-900',
    'bg-[#1C1D24]',
    'text-white',
    'outline-none',
    'opacity-90',
    'shadow-zinc-700',
    'shadow-md',
    'focus:scale-y-110',
    'text-justify',
    'px-1',
  );

  return (
    <div>
      <input
        placeholder={placeholder}
        type='text'
        className={`${inputClasses} ${styles}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchFriends;
