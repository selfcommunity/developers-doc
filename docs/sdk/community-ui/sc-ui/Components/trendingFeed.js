import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const TrendingFeed = require('@selfcommunity/ui').TrendingFeed;
                return <TrendingFeed categoryId={3}/>;
            }}
        </BrowserOnly>
    );
}




