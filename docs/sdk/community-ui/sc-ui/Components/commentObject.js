import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const CommentObject = require('@selfcommunity/ui').CommentObject;
                return <CommentObject/>;
            }}
        </BrowserOnly>
    );
}




