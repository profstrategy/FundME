import { useState } from 'react'

import { ButtonScope } from '../Components';
import { minus, plus } from '../assets';
import { UseFundMe } from '../Context/FundMeContext';

const BorrowBank = () => {
    const { borrowBank } = UseFundMe()
    const [showIcon, setShowIcon] = useState(plus)

    const handleShowIcon = () => {
        setShowIcon(!showIcon)
        setShowUser(showUser => !showUser)
    }
    return (
        <>
            {borrowBank &&
                <div className='mt-5 md:mt-0'>
                    <div className='rounded-md bg-[#0D0D0D] py-3 w-full m-auto border-[1px] border-[#6D7D93] iphonesm:w-5/6 iphonesm:m-auto tablet:w-4/6'>
                        <form className={`w-full grid gap-3 bg-[#0D0D0D] py-3 h-auto `}>

                            <h6 className='text-[#ffffff] text-md text-wrap m-auto px-2 '>{borrowBank.name} want to borrow from FundME account</h6>

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

export default BorrowBank
