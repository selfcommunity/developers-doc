---
sidebar_label: List of Vote Events
sidebar_position: 1
title: List of Vote Events
---

| Event        | Triggered When                                                                                                                                                                                                                       | Note |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------|
| vote.created | a user votes a contribute ([Discussion](../apireference/v2/schemas/discussion), [Post](../apireference/v2/schemas/post),  [Status](../apireference/v2/schemas/status) or [Comment](../apireference/v2/schemas/comment))              | ---  |
| vote.deleted | a user remove the vote from a contribute ([Discussion](../apireference/v2/schemas/discussion), [Post](../apireference/v2/schemas/post), [Status](../apireference/v2/schemas/status) or [Comment](../apireference/v2/schemas/comment) | ---  |

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "event_id": 0,
    "type": "vote.created",
    "created": 1623060368.026038,
    "data": {
        "user": {
            "id": 1,
            "username": "string",
            "real_name": "string",
            "email": "user@example.com",
            "email_isvalid": true,
            "date_joined": "2019-08-24T14:15:22Z",
            "bio": "string",
            "location": "string",
            "location_lat_lng": "string",
            "position_lat_lng": "string",
            "date_of_birth": "2019-09-23",
            "description": "string",
            "gender": "Male",
            "status": "a",
            "website": "https://example.com",
            "avatar": "string",
            "cover": "string",
            "ext_id": "string",
            "tags": [],
            "reputation": 111,
            "followings_counter": 7,
            "followers_counter": 2,
            "posts_counter": 4,
            "discussions_counter": 3,
            "statuses_counter": 0,
            "polls_counter": 1
        },
        "voted_at": "2021-06-07T12:06:07.849533+02:00",
        "object_type": "discussion",
        "discussion": {
            "id": 3,
            "categories": [],
            "medias": [],
            "location": [],
            "poll": [],
            "last_activity_at": "2021-05-28T02:41:00+02:00",
            "last_edited_at": null,
            "author": {
                "id": 92,
                "username": "string",
                "real_name": "string",
                "date_joined": "2021-05-28T10:33:52.269304+02:00",
                "bio":  "string",
                "location": "string",
                "location_lat_lng":  "string",
                "position_lat_lng":  "string",
                "date_of_birth": "string",
                "description": "string",
                "gender": "Male",
                "website": "https://example.com",
                "avatar": "string",
                "cover": "string",
                "ext_id": "string",
                "tags": [],
                "reputation": 111,
                "followings_counter": 7,
                "followers_counter": 2,
                "posts_counter": 4,
                "discussions_counter": 3,
                "statuses_counter": 0,
                "polls_counter": 1
            },
            "added_at": "string",
            "html": "string",
            "summary": "string",
            "deleted": false,
            "collapsed": false,
            "comment_count": 6,
            "vote_count": 2,
            "flag_count": 0,
            "share_count": 0,
            "addressing": [],
            "tags": [],
            "title": "string",
            "slug": "string",
            "view_count": 7,
            "follower_count": 0
        }
    }
}
```

</TabItem>
</Tabs>
````