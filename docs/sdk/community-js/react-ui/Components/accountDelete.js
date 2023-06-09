import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';


export default function App() {
    return (
        <BrowserOnly>
            {() => {
                const AccountDelete = require('@selfcommunity/react-ui').AccountDelete;
                return <AccountDelete/>;
            }}
        </BrowserOnly>
    );
}




