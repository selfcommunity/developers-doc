import React from 'react';
import {UserProfile} from '@selfcommunity/templates';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App() {
    return (
        <BrowserOnly>
            <UserProfile/>
        </BrowserOnly>
    );
}




