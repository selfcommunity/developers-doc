---
sidebar_label: List of Discussion Events
sidebar_position: 7
title: List of Discussion Events
---

| Event               | Triggered When                          | Note                                                                          |
|---------------------|-----------------------------------------|-------------------------------------------------------------------------------|
| discussion.created  | a new discussion is created             | This event is triggered only if `discussion_enabled` community option is true |
| discussion.updated  | a discussion is updated                 | This event is triggered only if `discussion_enabled` community option is true |
| discussion.deleted  | a discussion is deleted                 | This event is triggered only if `discussion_enabled` community option is true |
| discussion.restored | a discussion is restored after deletion | This event is triggered only if `discussion_enabled` community option is true |
| discussion.follow   | a discussion is followed by the user    | This event is triggered only if `discussion_enabled` community option is true |
| discussion.unfollow | a discussion is unfollowed by the user  | This event is triggered only if `discussion_enabled` community option is true |

> * discussion.created
>* discussion.updated
>* discussion.deleted
>* discussion.restored

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "event_id": 0,
    "type": "string",
    "created": 1625471209.139224,
    "data": {
        "id": 1,
        "categories": [],
        "medias": [],
        "location": [],
        "poll": [],
        "last_activity_at": "2021-05-28T11:37:25.178645+02:00",
        "last_edited_at": null,
        "author": {
            "id": 100,
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
        "added_at": "2021-05-28T11:37:25.178645+02:00",
        "html":  "string",
        "summary":  "string",
        "deleted": true,
        "collapsed": false,
        "comment_count": 0,
        "vote_count": 0,
        "flag_count": 0,
        "share_count": 0,
        "addressing": [],
        "tags": [],
        "title": "string",
        "slug": "string",
        "view_count": 0,
        "follower_count": 0
    }
}
```

</TabItem>
</Tabs>
````

> * discussion.follow
>* discussion.unfollow

````mdx-code-block

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "event_id": 0,
    "type": "string",
    "created": 1625471209.139224,
    "data": {
        "added_at": "2021-06-07T09:46:39.536844+02:00",
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
            "ext_id": 3,
            "tags": [],
            "reputation": 111,
            "followings_counter": 7,
            "followers_counter": 2,
            "posts_counter": 4,
            "discussions_counter": 3,
            "statuses_counter": 0,
            "polls_counter": 1
        },
        "discussion": {
            "id": 1,
            "categories": [],
            "medias": [],
            "location": "string",
            "poll": [],
            "last_activity_at": "2021-06-07T09:44:59.016173+02:00",
            "last_edited_at": null,
            "author": {
                "id": 100,
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
            "added_at": "2021-06-07T09:44:59.016173+02:00",
            "html":  "string",
            "summary":  "string",
            "deleted": true,
            "collapsed": false,
            "comment_count": 0,
            "vote_count": 0,
            "flag_count": 0,
            "share_count": 0,
            "addressing": [],
            "tags": [],
            "title": "string",
            "slug": "string",
            "view_count": 0,
            "follower_count": 0
        }
    }
}
```

</TabItem>
</Tabs>
````