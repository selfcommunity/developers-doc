import React from 'react';
import {CategoryFeed} from '@selfcommunity/templates';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App() {
    return (
        <BrowserOnly>
            <CategoryFeed/>
        </BrowserOnly>
    );
}




