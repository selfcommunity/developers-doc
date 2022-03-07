import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const Feed = require('@selfcommunity/ui').Feed;
                const Endpoints = require('@selfcommunity/core').Endpoints;
                const FeedObject = require('@selfcommunity/ui').FeedObject;
                const FeedObjectSkeleton = require('@selfcommunity/ui').FeedObjectSkeleton;
                const  itemPropsGenerator = (scUser, item) => ({
                        feedObject: item[item.type],
                        feedObjectType: item.type,
                        feedObjectActivities: item.activities ? item.activities : null,
                        markRead: scUser ? !item.seen_by_id.includes(scUser.id) : false
                    });
                return <Feed id={'feed'} endpoint={Endpoints.ExploreFeed} ItemComponent={FeedObject} itemPropsGenerator={itemPropsGenerator} ItemSkeleton={FeedObjectSkeleton}/>;
            }}
        </BrowserOnly>
    );
}
