import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const PrivateMessages = require('@selfcommunity/react-ui').PrivateMessageComponent;
                return <PrivateMessages id={2}/>;
            }}
        </BrowserOnly>
    );
}




