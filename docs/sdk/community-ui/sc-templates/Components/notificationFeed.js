import React from 'react';
import {NotificationFeed} from '@selfcommunity/templates';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly><NotificationFeed/></BrowserOnly>
    );
}




