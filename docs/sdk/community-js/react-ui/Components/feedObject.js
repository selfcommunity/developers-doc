import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const FeedObject = require('@selfcommunity/react-ui').FeedObject;
                return <FeedObject feedObjectId={25} feedObjectType={'discussion'}/>;
            }}
        </BrowserOnly>
    );
}




