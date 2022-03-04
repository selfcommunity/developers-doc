import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const Notification = require('@selfcommunity/ui').Notification;
                return <Notification/>;
            }}
        </BrowserOnly>
    );
}




