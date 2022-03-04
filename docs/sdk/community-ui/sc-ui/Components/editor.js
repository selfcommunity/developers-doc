import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const Editor = require('@selfcommunity/ui').Editor;
                return <Editor/>;
            }}
        </BrowserOnly>
    );
}




