import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const FeedObject = require('@selfcommunity/ui').FeedObject;
                return <FeedObject/>;
            }}
        </BrowserOnly>
    );
}




