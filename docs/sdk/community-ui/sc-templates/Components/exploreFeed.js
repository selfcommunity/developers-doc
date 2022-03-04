import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const ExploreFeed = require('@selfcommunity/templates').ExploreFeed;
                return <ExploreFeed/>;
            }}
        </BrowserOnly>
    );
}




