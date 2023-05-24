import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const LoyaltyProgramDetail = require('@selfcommunity/react-templates').LoyaltyProgramDetail;
                return <LoyaltyProgramDetail/>;
            }}
        </BrowserOnly>
    );
};
