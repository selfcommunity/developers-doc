import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const IncubatorSuggestion = require('@selfcommunity/react-ui').IncubatorSuggestionWidget;
                return <IncubatorSuggestion/>;
            }}
        </BrowserOnly>
    );
}




