import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';


export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const User = require('@selfcommunity/ui').User;
                return <div style={{width: '400px'}}><User userId={18}/></div>;
            }}
        </BrowserOnly>
    );
}




