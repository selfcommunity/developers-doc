import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const UserProfileInfo = require('@selfcommunity/ui').UserProfileInfo;
                return <UserProfileInfo userId={18}/>;
            }}
        </BrowserOnly>
    );
}




