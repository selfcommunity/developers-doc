import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const PeopleSuggestion = require('@selfcommunity/react-ui').PeopleSuggestion;
                return <PeopleSuggestion/>;
            }}
        </BrowserOnly>
    );
}




