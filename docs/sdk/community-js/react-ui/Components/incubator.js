import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const Incubator = require('@selfcommunity/react-ui').Incubator;
                return <Incubator incubatorId={1}/>;
            }}
        </BrowserOnly>
    );
}




