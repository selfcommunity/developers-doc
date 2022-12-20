import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const Thread = require('@selfcommunity/react-ui').Thread;
                return <Thread />;
            }}
        </BrowserOnly>
    );
}




