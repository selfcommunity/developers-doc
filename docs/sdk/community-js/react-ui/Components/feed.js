import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const Feed = require('@selfcommunity/react-ui').Feed;
                const Endpoints = require('@selfcommunity/api-services').Endpoints;
                const FeedObject = require('@selfcommunity/react-ui').FeedObject;
                const FeedObjectSkeleton = require('@selfcommunity/react-ui').FeedObjectSkeleton;
                const  itemPropsGenerator = (scUser, item) => ({
                        feedObject: item[item.type],
                        feedObjectType: item.type,
                        feedObjectActivities: item.activities ? item.activities : null,
                        markRead: scUser ? !item.seen_by_id.includes(scUser.id) : false
                    });
                const itemIdGenerator = (item) => item[item.type].id;
                return <Feed id={'feed'} endpoint={Endpoints.ExploreFeed} ItemComponent={FeedObject} itemPropsGenerator={itemPropsGenerator} ItemSkeleton={FeedObjectSkeleton} itemIdGenerator={itemIdGenerator}/>;
            }}
        </BrowserOnly>
    );
}
