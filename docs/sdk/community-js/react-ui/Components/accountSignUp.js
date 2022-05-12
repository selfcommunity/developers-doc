import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';


export default function App() {
    return (
        <BrowserOnly>
            {() => {
                const AccountSignUp = require('@selfcommunity/react-ui').AccountSignUp;
                return <AccountSignUp/>;
            }}
        </BrowserOnly>
    );
}




