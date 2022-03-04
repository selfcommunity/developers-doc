import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const CustomAdv = require('@selfcommunity/ui').CustomAdv;
                return <CustomAdv/>;
            }}
        </BrowserOnly>
    );
}




