import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const LoyaltyProgram = require('@selfcommunity/react-ui').LoyaltyProgram;
                const Box = require('@mui/material').Box;
                return <Box sx={{maxWidth: '400px'}}><LoyaltyProgram /></Box>;
            }}
        </BrowserOnly>
    );
}




