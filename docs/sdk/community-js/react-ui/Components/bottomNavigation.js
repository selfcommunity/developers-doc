import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';


export default function App() {
    return (
        <BrowserOnly>
            {() => {
                const BottomNavigation = require('@selfcommunity/react-ui').BottomNavigation;
                return <BottomNavigation/>;
            }}
        </BrowserOnly>
    );
}




