import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const CategoriesSuggestion = require('@selfcommunity/react-ui').CategoriesSuggestion;
                return <CategoriesSuggestion/>;
            }}
        </BrowserOnly>
    );
}




