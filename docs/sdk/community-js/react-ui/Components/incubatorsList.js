import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const IncubatorsList = require('@selfcommunity/react-ui').IncubatorsList;
                return <IncubatorsList incubatorId={1}/>;
            }}
        </BrowserOnly>
    );
}




