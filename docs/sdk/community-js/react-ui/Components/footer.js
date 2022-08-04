import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const Footer = require('@selfcommunity/react-ui').Footer;
                return <Footer/>;
            }}
        </BrowserOnly>
    );
}




