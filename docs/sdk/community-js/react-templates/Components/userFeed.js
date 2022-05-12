import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App() {
    return (
        <BrowserOnly>
            {() => {
                const UserFeed = require('@selfcommunity/react-templates').UserFeed;
                return <UserFeed userId={1}/>;
            }}
        </BrowserOnly>
    );
}




