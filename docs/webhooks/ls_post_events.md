---
sidebar_label: List of Post Events
sidebar_position: 1
title: List of Post Events
---

| Event          | Triggered When                                     | Note                                                                    |
|----------------|----------------------------------------------------|-------------------------------------------------------------------------|
| post.created   | a new post is created                              | This event is triggered only if `post_enabled` community option is true |
| post.updated   | a post is updated                                  | This event is triggered only if `post_enabled` community option is true |
| post.deleted   | a post is deleted                                  | This event is triggered only if `post_enabled` community option is true |
| post.restored  | a post is restored after deletion                  | This event is triggered only if `post_enabled` community option is true |
| post.follow    | a post is followed by the user                     | This event is triggered only if `post_enabled` community option is true |
| post.unfollow  | a post is unfollowed by the user                   | This event is triggered only if `post_enabled` community option is true |
| post.suspend   | a post's notifications are suspended by the user   | This event is triggered only if `post_enabled` community option is true |
| post.unsuspend | a post's notifications are unsuspended by the user | This event is triggered only if `post_enabled` community option is true |

> * post.created
>* post.updated
>* post.deleted
>* post.restored

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
        "tags": []
    }
}
```

</TabItem>
</Tabs>
````

> * post.follow
>* post.unfollow
>* post.suspend
>* post.unsuspend

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
        "post": {
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
            "tags": []
        }
    }
}
```

</TabItem>
</Tabs>
````