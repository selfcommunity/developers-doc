import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const Category = require('@selfcommunity/react-templates').Category;
                return <Category categoryId={3}/>;
            }}
        </BrowserOnly>
    );
};
