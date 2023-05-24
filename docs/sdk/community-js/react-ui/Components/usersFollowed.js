import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const UsersFollowed = require('@selfcommunity/react-ui').UserFollowedUsersWidget;
                return <UsersFollowed userId={7}/>;
            }}
        </BrowserOnly>
    );
}




