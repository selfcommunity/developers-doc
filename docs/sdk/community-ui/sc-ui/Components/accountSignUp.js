import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';


export default function App() {
    return (
        <BrowserOnly>
            {() => {
                const AccountSignUp = require('@selfcommunity/ui').AccountSignUp;
                return <AccountSignUp/>;
            }}
        </BrowserOnly>
    );
}




