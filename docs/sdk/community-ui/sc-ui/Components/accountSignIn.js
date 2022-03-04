import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';



export default function App() {
    return (
        <BrowserOnly>
            {() => {
                const AccountSignIn = require('@selfcommunity/ui').AccountSignIn;
                return <AccountSignIn/>;
            }}
        </BrowserOnly>
    );
}




