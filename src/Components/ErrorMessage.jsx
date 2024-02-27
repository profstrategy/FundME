import React from 'react';
import { useSelector } from 'react-redux';

const ErrorMessage = () => {
    const error = useSelector(state => state.data.error);

    return (
        <div className='h-20 bg-[#1C1D24] rounded-md m-auto grid mt-5 items-center w-4/6'>
            <p className='text-[#ffffff] text-center m-auto z-50'>
                <span >🚫 {error}</span>
            </p>
        </div>
    );
}

export default ErrorMessage;