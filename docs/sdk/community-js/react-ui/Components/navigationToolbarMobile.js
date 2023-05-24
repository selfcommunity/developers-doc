import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';


export default function App() {
    return (
        <BrowserOnly>
            {() => {
                const NavigationToolbarMobile = require('@selfcommunity/react-ui').NavigationToolbarMobile;
                return <NavigationToolbarMobile/>;
            }}
        </BrowserOnly>
    );
}




