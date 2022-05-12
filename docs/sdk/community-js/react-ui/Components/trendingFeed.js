import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const TrendingFeed = require('@selfcommunity/react-ui').TrendingFeed;
                const template = 'snippet';
                return <TrendingFeed categoryId={5} template={template} elevation={1}/>;
            }}
        </BrowserOnly>
    );
}




