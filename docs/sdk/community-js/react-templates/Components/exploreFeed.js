import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const ExploreFeed = require('@selfcommunity/react-templates').ExploreFeed;
                return <ExploreFeed/>;
            }}
        </BrowserOnly>
    );
}




