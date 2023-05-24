import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const UserSuggestion = require('@selfcommunity/react-ui').UserSuggestionWidget;
                return <UserSuggestion/>;
            }}
        </BrowserOnly>
    );
}




