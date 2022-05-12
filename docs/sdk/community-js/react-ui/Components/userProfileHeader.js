import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const UserProfileHeader = require('@selfcommunity/react-ui').UserProfileHeader;
                return <UserProfileHeader userId={7}/>;
            }}
        </BrowserOnly>
    );
}




