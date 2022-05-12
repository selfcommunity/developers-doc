import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const MainFeed = require('@selfcommunity/react-templates').MainFeed;
                return <MainFeed/>;
            }}
        </BrowserOnly>

    );
}




