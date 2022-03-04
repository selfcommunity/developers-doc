import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const TrendingPeople = require('@selfcommunity/ui').TrendingPeople;
                return <TrendingPeople categoryId={2}/>;
            }}
        </BrowserOnly>
    );
}




