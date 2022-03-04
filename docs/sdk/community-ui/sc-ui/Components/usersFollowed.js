import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const UsersFollowed = require('@selfcommunity/ui').UsersFollowed;
                return <UsersFollowed id={7}/>;
            }}
        </BrowserOnly>
    );
}




