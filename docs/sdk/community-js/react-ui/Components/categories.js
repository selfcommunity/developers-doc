import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const Categories = require('@selfcommunity/react-ui').Categories;
                return <Categories showFilters={true}/>;
            }}
        </BrowserOnly>
    );
}




