import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const ToastNotifications = require('@selfcommunity/ui').ToastNotifications;
                return <ToastNotifications/>;
            }}
        </BrowserOnly>
    );
}




