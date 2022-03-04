import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const ChangePicture = require('@selfcommunity/ui').ChangePicture;
                return <ChangePicture/>;
            }}
        </BrowserOnly>
    );
}




