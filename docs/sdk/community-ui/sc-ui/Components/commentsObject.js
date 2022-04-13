import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const discussion = 'discussion';
                const CommentsObject = require('@selfcommunity/ui').CommentsObject;
                return <CommentsObject feedObjectType={discussion} feedObjectId={30}/>;
            }}
        </BrowserOnly>
    );
}




