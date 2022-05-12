import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const Thread = require('@selfcommunity/react-ui').Thread;
                return <Thread id={51}/>;
            }}
        </BrowserOnly>
    );
}




