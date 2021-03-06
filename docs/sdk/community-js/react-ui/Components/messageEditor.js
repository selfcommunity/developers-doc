import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';


export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const MessageEditor = require('@selfcommunity/react-ui').MessageEditor;
                return <MessageEditor/>;
            }}
        </BrowserOnly>
    );
}




