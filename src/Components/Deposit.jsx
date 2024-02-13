import React, { useState } from 'react';

import { ButtonScope } from '../Components';
import { minus, plus } from '../assets';
import { UseFundMe } from '../Context/FundMeContext';

const Deposit = () => {
    const { deposit } = UseFundMe()
    const [showIcon, setShowIcon] = useState(plus)

    const handleShowIcon = () => {
        setShowIcon(!showIcon)

    }
    return (
        <>
           {deposit && <div className='mt-5 md:mt-0'>
                <div className='rounded-md bg-[#0D0D0D] py-3 mb-3 w-full tablet:w-4/6 m-auto border-[1px] border-[#6D7D93] iphonesm:w-5/6 iphonesm:m-auto'>
                    <form className={`w-full grid gap-3 bg-[#0D0D0D] py-3 h-auto `}>

                    <h6 className='text-[#ffffff] text-md text-wrap m-auto px-2'>Make a deposit to {deposit.name} account</h6>
                    <img src={`${showIcon ? plus : minus}`} className='w-5 visible sm:hidden bg-[#6D7D93] rounded-full relative bottom-14 left-3' onClick={handleShowIcon} />

                    <input type='text' className='w-5/6 m-auto grid py-2 bg-[#0D0D0D] shadow-md shadow-[#0D0D0D] border-[#1C1D24] border-2 outline-none rounded text-[#FFFFFF]' placeholder='amount to borrow' />
                    </form>

                    <div className='grid justify-end px-10'>
                        <ButtonScope
                            ml='1'
                        >Request</ButtonScope>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Deposit
