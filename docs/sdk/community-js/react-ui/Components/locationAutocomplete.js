import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const LocationAutocomplete = require('@selfcommunity/react-ui').LocationAutocomplete;
                return <LocationAutocomplete />;
            }}
        </BrowserOnly>
    );
}




