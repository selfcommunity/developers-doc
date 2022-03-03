import React from 'react';
import {ExploreFeed} from '@selfcommunity/templates';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly><ExploreFeed/></BrowserOnly>
    );
}




