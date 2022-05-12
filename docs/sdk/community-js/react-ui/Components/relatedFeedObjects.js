import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const RelatedFeedObjects = require('@selfcommunity/react-ui').RelatedFeedObjects;
                return <RelatedFeedObjects/>;
            }}
        </BrowserOnly>
    );
}




