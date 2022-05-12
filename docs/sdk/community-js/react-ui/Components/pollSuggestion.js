import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const PollSuggestion = require('@selfcommunity/react-ui').PollSuggestion;
                return <PollSuggestion/>;
            }}
        </BrowserOnly>
    );
}




