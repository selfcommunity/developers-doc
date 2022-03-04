import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const ChangeCover = require('@selfcommunity/ui').ChangeCover;
                return <ChangeCover/>;
            }}
        </BrowserOnly>
    );
}




