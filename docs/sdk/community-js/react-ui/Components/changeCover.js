import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const ChangeCover = require('@selfcommunity/react-ui').ChangeCover;
                return <ChangeCover/>;
            }}
        </BrowserOnly>
    );
}




