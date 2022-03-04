import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const RelatedDiscussion = require('@selfcommunity/ui').RelatedDiscussion;
                return <RelatedDiscussion/>;
            }}
        </BrowserOnly>
    );
}




