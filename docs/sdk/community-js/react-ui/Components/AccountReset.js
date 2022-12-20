import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';



export default function App() {
    return (
        <BrowserOnly>
            {() => {
                const AccountReset = require('@selfcommunity/react-ui').AccountReset;
                return <AccountReset/>;
            }}
        </BrowserOnly>
    );
}




