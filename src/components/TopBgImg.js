import React from 'react';

function TopBgImg({children, styleBg}) {
    return <header className={styleBg}>{children}</header>;
}

export default TopBgImg;

TopBgImg.defaultProps = {
    styleBg: "defaultBgImg"
}