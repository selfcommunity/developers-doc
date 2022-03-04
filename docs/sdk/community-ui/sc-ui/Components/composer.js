import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const Composer = require('@selfcommunity/ui').Composer;
                return <Composer/>;
            }}
        </BrowserOnly>
    );
}




