import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const FriendshipUserButton = require('@selfcommunity/react-ui').FriendshipUserButton;
                return <FriendshipUserButton/>;
            }}
        </BrowserOnly>
    );
}




