import React from 'react';
import {MainFeed} from '@selfcommunity/templates';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly><MainFeed/></BrowserOnly>
    );
}




