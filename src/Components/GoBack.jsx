import React from 'react'
import { arrowLeft } from '../assets'

const GoBack = ( { onClick }) => {
    return (
        <div>
            <img src={arrowLeft} className={`object-contain tablet:fixed iphonesm:fixed tablet:top-2 tablet:left-2 tablet:w-8 iphonesm:w-8  iphonesm:top-2 iphonesm:left-2 `} onClick={ onClick} />
        </div>
    )
}

export default GoBack
