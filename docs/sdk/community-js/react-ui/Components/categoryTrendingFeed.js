import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const CategoryTrendingFeedWidget = require('@selfcommunity/react-ui').CategoryTrendingFeedWidget;
                const template = 'snippet';
                return <CategoryTrendingFeedWidget categoryId={5} template={template} elevation={1}/>;
            }}
        </BrowserOnly>
    );
}




