import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const PeopleSuggestion = require('@selfcommunity/ui').PeopleSuggestion;
                return <PeopleSuggestion/>;
            }}
        </BrowserOnly>
    );
}




