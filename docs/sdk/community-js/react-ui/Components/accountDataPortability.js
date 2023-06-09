import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';


export default function App() {
    return (
        <BrowserOnly>
            {() => {
                const AccountDataPortability = require('@selfcommunity/react-ui').AccountDataPortability;
                return <AccountDataPortability/>;
            }}
        </BrowserOnly>
    );
}




