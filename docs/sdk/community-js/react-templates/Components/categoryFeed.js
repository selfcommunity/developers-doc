import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';


export default function App() {
    return (
        <BrowserOnly>
            {() => {
                const CategoryFeed = require('@selfcommunity/react-templates').CategoryFeed;
                return <CategoryFeed categoryId={3}/>;
            }}
        </BrowserOnly>
    );
}




