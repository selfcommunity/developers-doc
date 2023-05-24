import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const UserFollowers = require('@selfcommunity/react-ui').UserFollowersWidget;
                return <UserFollowers userId={7}/>;
            }}
        </BrowserOnly>
    );
}




