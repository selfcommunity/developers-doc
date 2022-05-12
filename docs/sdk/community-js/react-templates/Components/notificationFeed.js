import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const NotificationFeed = require('@selfcommunity/react-templates').NotificationFeed;
                return <NotificationFeed/>;
            }}
        </BrowserOnly>

    );
}




