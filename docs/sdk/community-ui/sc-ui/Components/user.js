import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';


export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const User = require('@selfcommunity/ui').User;
                return <User userId={18}/>;
            }}
        </BrowserOnly>
    );
}




