import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const PrivateMessages = require('@selfcommunity/react-templates').PrivateMessages;
                return <PrivateMessages/>;
            }}
        </BrowserOnly>
    );
}




