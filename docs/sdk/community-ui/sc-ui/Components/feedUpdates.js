import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const FeedUpdates = require('@selfcommunity/ui').FeedUpdates;
                return <FeedUpdates/>;
            }}
        </BrowserOnly>
    );
}




