import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const discussion = 'discussion';
                const CommentsFeedObject = require('@selfcommunity/react-ui').CommentsFeedObject;
                return <CommentsFeedObject feedObjectType={discussion} feedObjectId={30}/>;
            }}
        </BrowserOnly>
    );
}




