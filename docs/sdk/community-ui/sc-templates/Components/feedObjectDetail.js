import React from 'react';
import {FeedObjectDetail} from '@selfcommunity/templates';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App() {
    return (
        <BrowserOnly>
            <FeedObjectDetail/>
        </BrowserOnly>
    );
}




