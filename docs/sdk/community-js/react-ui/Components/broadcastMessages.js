import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';


export default function App() {
    return (
        <BrowserOnly>
            {() => {
                const BroadcastMessages = require('@selfcommunity/react-ui').BroadcastMessages;
                return <BroadcastMessages/>;
            }}
        </BrowserOnly>
    );
}




