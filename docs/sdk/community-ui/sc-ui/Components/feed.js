import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const Feed = require('@selfcommunity/ui').Feed;
                return <Feed/>;
            }}
        </BrowserOnly>
    );
}




