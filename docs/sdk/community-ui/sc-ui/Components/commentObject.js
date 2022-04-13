import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const discussion = 'discussion';
                const CommentObject = require('@selfcommunity/ui').CommentObject;
                return <CommentObject commentObjectId={70} feedObjectType={discussion} feedObjectId={30}/>;
            }}
        </BrowserOnly>
    );
}


