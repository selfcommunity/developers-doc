import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const Snippets = require('@selfcommunity/react-ui').Snippets;
                return <Snippets/>;
            }}
        </BrowserOnly>
    );
}




