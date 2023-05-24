import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';


export default function App() {
    return (
        <BrowserOnly>
            {() => {
                const NavigationToolbar = require('@selfcommunity/react-ui').NavigationToolbar;
                return <NavigationToolbar/>;
            }}
        </BrowserOnly>
    );
}




