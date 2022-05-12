import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';


export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const Message = require('@selfcommunity/react-ui').Message;
                return <Message />;
            }}
        </BrowserOnly>
    );
}




