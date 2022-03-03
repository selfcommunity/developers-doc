import React from 'react';
import {PrivateMessages} from '@selfcommunity/templates';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly><PrivateMessages/></BrowserOnly>
    );
}




