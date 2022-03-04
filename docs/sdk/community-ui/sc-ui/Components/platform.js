import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const Platform = require('@selfcommunity/ui').Platform;
                return <Platform/>;
            }}
        </BrowserOnly>
    );
}




