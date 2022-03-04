import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const UserProfileEdit = require('@selfcommunity/ui').UserProfileEdit;
                return <UserProfileEdit id={18}/>;
            }}
        </BrowserOnly>
    );
}




