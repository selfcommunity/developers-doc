import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const CategoryAutocomplete = require('@selfcommunity/react-ui').CategoryAutocomplete;
                return <CategoryAutocomplete />;
            }}
        </BrowserOnly>
    );
}




