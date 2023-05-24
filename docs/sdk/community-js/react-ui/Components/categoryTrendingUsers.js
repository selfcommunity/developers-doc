import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const CategoryTrendingUsersWidget = require('@selfcommunity/react-ui').CategoryTrendingUsersWidget;
                return <CategoryTrendingUsersWidget categoryId={2}/>;
            }}
        </BrowserOnly>
    );
}




