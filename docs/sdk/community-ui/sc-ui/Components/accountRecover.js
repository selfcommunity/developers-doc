import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';


export default function App() {
    return (
        <BrowserOnly>
            {() => {
                const AccountRecover = require('@selfcommunity/ui').AccountRecover;
                return <AccountRecover/>;
            }}
        </BrowserOnly>
    );
}




