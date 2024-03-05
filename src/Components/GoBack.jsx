import React from 'react';
import classNames from 'classnames';

const GoBack = ({ onClick, styles = '', src, value }) => {
    const classnames = classNames({
        "object-contain": true,
        "tablet:fixed": true,
        "iphonesm:fixed": true,
        "tablet:top-2": true,
        "tablet:left-2": true,
        "tablet:w-8": true,
        "iphonesm:w-8": true,
        "iphonesm:top-2": true,
        "iphonesm:left-2": true
    });

    return (
        <div className={`${classnames} ${styles}`} >
            <img src={src} onClick={onClick} value={value} />
        </div>
    );
}

export default GoBack;

