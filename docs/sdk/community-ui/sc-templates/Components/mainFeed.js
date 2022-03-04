import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const MainFeed = require('@selfcommunity/templates').MainFeed;
                return <MainFeed/>;
            }}
        </BrowserOnly>

    );
}




