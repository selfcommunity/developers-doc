import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';


export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const CategoryHeader = require('@selfcommunity/ui').CategoryHeader;
                return <CategoryHeader categoryId={10}/>;
            }}
        </BrowserOnly>
    );
}




