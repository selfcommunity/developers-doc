import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const FollowUserButton = require('@selfcommunity/ui').FollowUserButton;
                return <FollowUserButton/>;
            }}
        </BrowserOnly>
    );
}




