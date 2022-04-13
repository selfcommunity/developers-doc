import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {LoyaltyProgram} from "@selfcommunity/ui";


export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const LoyaltyProgram = require('@selfcommunity/ui').LoyaltyProgram;
                return <div style={{width: '500px'}}><LoyaltyProgram/></div>;
            }}
        </BrowserOnly>
    );
}




