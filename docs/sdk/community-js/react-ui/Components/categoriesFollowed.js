import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const CategoriesFollowed = require('@selfcommunity/react-ui').CategoriesFollowed;
                return <CategoriesFollowed userId={7}/>;
            }}
        </BrowserOnly>
    );
}




