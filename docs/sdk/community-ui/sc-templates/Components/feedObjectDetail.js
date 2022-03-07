import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App() {
    return (
        <BrowserOnly>
            {() => {
                const FeedObjectDetail = require('@selfcommunity/templates').FeedObjectDetail;
                return <FeedObjectDetail feedObjectId={25} feedObjectType={'discussion'}/>;
            }}
        </BrowserOnly>

    );
}




