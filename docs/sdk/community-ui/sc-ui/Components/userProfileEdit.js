import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const UserProfileEdit = require('@selfcommunity/ui').UserProfileEdit;
                return <UserProfileEdit userId={18}/>;
            }}
        </BrowserOnly>
    );
}




