import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const InlineComposer = require('@selfcommunity/react-ui').InlineComposer;
                return <InlineComposer/>;
            }}
        </BrowserOnly>
    );
}




