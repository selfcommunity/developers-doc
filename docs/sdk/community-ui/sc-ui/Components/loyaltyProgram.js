import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';


export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const LoyaltyProgram = require('@selfcommunity/ui').LoyaltyProgram;
                return <LoyaltyProgram/>;
            }}
        </BrowserOnly>
    );
}




