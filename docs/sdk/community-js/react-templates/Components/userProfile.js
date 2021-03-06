import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App() {
    return (
        <BrowserOnly>
            {() => {
                const UserProfile = require('@selfcommunity/react-templates').UserProfile;
                return <UserProfile userId={1}/>;
            }}
        </BrowserOnly>
    );
}




