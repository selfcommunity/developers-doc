import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const CategoriesFollowed = require('@selfcommunity/ui').CategoriesFollowed;
                return <CategoriesFollowed/>;
            }}
        </BrowserOnly>
    );
}




