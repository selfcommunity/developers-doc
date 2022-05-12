import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const FollowCategoryButton = require('@selfcommunity/react-ui').FollowCategoryButton;
                return <FollowCategoryButton/>;
            }}
        </BrowserOnly>
    );
}




