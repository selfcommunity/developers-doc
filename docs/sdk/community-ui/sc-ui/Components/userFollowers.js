import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const UserFollowers = require('@selfcommunity/ui').UserFollowers;
                return <UserFollowers userId={7}/>;
            }}
        </BrowserOnly>
    );
}




