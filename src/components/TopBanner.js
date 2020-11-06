import React from 'react';

function TopBanner({children, title, subTitle}) {
    return (
        <div className="banner">
            <h6>{title}</h6>
            <div></div>
            <p>{subTitle}</p>
            {children}
        </div>
    );
}

export default TopBanner;