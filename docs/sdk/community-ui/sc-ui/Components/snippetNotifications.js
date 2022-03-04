import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';


export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const SnippetNotifications = require('@selfcommunity/ui').SnippetNotifications;
                return <SnippetNotifications/>;
            }}
        </BrowserOnly>
    );
}




