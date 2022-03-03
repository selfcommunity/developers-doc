import React from 'react';
import {UserFeed} from '@selfcommunity/templates';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App() {
    return (
        <BrowserOnly>
            <UserFeed/>
        </BrowserOnly>
    );
}




