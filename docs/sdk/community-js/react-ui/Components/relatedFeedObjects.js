import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const RelatedFeedObjects = require('@selfcommunity/react-ui').RelatedFeedObjects;
                const typeDiscussion = 'discussion';
                const template = 'snippet';
                return <RelatedFeedObjects feedObjectId={30} feedObjectType={typeDiscussion} template={template}/>;
            }}
        </BrowserOnly>
    );
}




