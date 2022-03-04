import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const CategoriesPopular = require('@selfcommunity/ui').CategoriesPopular;
                return <CategoriesPopular/>;
            }}
        </BrowserOnly>
    );
}




