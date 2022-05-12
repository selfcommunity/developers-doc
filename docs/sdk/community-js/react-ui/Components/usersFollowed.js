import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const UsersFollowed = require('@selfcommunity/react-ui').UsersFollowed;
                return <UsersFollowed userId={7}/>;
            }}
        </BrowserOnly>
    );
}




