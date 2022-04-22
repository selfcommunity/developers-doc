---
sidebar_label: List of Notification Events
sidebar_position: 12
title: List of Notification Events
---


:::info

All events with prefix notification.* include in the payload a field "recipients" specifying the list of recipients of the notification.

:::



| Notification                           | Triggered When                                                                            | Note                                                                       |
|----------------------------------------|-------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| notification.comment                   | a new comment of first level is created                                                   | ---                                                                        |
| notification.nested_comment            | a new comment of second level is created                                                  | ---                                                                        |
| notification.mention                   | a user is mentioned                                                                       | ---                                                                        |
| notification.vote_up                   | a user vote up a post/discussion/status/comment                                           | ---                                                                        |
| notification.follow                    | a user follow a post/discussion/status                                                    | ---                                                                        |
| notification.private_message           | a user send a private message                                                             | ---                                                                        |
| notification.deleted_for_advertising   | deleted content by moderators with motivation the content is advertising                  | ---                                                                        |
| notification.deleted_for_aggressive    | deleted content by moderators with motivation the content is aggressive                   | ---                                                                        |
| notification.deleted_for_vulgar        | deleted content by moderators with motivation the content is vulgar                       | ---                                                                        |
| notification.deleted_for_poor          | deleted content by moderators with motivation the content is poor                         | ---                                                                        |
| notification.deleted_for_offtopic      | deleted content by moderators with motivation the content is offtopic                     | ---                                                                        |
| notification.undeleted_for             | the content has been rehabilitated by the moderators                                      | ---                                                                        |
| notification.collapsed_for_advertising | only for comments, hidden content by moderator with motivation the content is advertising | ---                                                                        |
| notification.collapsed_for_aggressive  | only for comments, hidden content by moderator with motivation the content is aggressive  | ---                                                                        |
| notification.collapsed_for_vulgar      | only for comments, hidden content by moderator with motivation the content is vulgar      | ---                                                                        |
| notification.collapsed_for_poor        | only for comments, hidden content by moderator with motivation the content is poor        | ---                                                                        |
| notification.collapsed_for_offtopic    | only for comments, hidden content by moderator with motivation the content is offtopic    | ---                                                                        |
| notification.connection_request        | a user send a connection request                                                          | This event is triggered only if `follow_enabled` community option is false |
| notification.connection_accept         | a user accept a connection request                                                        | This event is triggered only if `follow_enabled` community option is false |
| notification.user_follow               | a user follow another user                                                                | This event is triggered only if `follow_enabled` community option is true  |
| notification.kindly_notice_advertising | content author notified for advertising content (via moderation)                          | ---                                                                        |
| notification.kindly_notice_aggressive  | content author notified for advertising content (via moderation)                          | ---                                                                        |
| notification.kindly_notice_vulgar      | content author notified for advertising content (via moderation)                          | ---                                                                        |
| notification.kindly_notice_poor        | content author notified for advertising content (via moderation)                          | ---                                                                        |
| notification.kindly_notice_offtopic    | content author notified for advertising content (via moderation)                          | ---                                                                        |
| notification.blocked_user              | a user is blocked                                                                         | ---                                                                        |
| notification.unblocked_user            | a user is unblocked                                                                       | ---                                                                        |
| notification.custom_notification       | a custom notification is created                                                          | ---                                                                        |
| notification.banner.sent               | a notification banner is sent and addressed to users                                      | ---                                                                        |



>* notification.comment

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
        "recipients": [
            1
        ],
        "discussion": {
            "id": 2,
            "categories": [],
            "medias": [],
            "location": [],
            "poll": [],
            "last_activity_at": "2021-06-07T12:30:44.509122+02:00",
            "last_edited_at": null,
            "author": {
                "id": 1,
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
            "added_at": "2021-05-27T14:58:04.334631+02:00",
            "html": "string",
            "summary": "string",
            "deleted": false,
            "collapsed": false,
            "comment_count": 2,
            "vote_count": 2,
            "flag_count": 0,
            "share_count": 0,
            "addressing": [],
            "title": "string",
            "slug": "string",
            "view_count": 3,
            "follower_count": 0
        },
        "type": "string",
        "active_at": "2021-06-07T12:30:44.509122+02:00",
        "comment": {
            "id": 71,
            "discussion": 2,
            "author": {
                "id": 7,
                "username": "string",
                "real_name": "string",
                "description": "string",
                "avatar": "string",
                "ext_id": null,
                "tags": [],
                "reputation": 86,
                "followings_counter": 7,
                "followers_counter": 2,
                "posts_counter": 4,
                "discussions_counter": 3,
                "statuses_counter": 0,
                "polls_counter": 1
            },
            "added_at": "2021-06-07T12:30:44.509122+02:00",
            "html": "string",
            "summary": "string",
            "deleted": false,
            "collapsed": false,
            "parent": null,
            "in_reply_to": null,
            "comment_count": 1,
            "vote_count": 0,
            "flag_count": 0
        }
    }
}
```

</TabItem>
</Tabs>
````



>* notification.nested_comment

````mdx-code-block


<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">


```json
{
    "event_id": 0,
    "type": "string",
    "created": 1625471209.139224,
    "data": {
        "recipients": [
            1
        ],
        "discussion": {
            "id": 2,
            "categories": [],
            "medias": [],
            "location": [],
            "poll": [],
            "last_activity_at": "2021-06-07T12:24:23.830573+02:00",
            "last_edited_at": null,
            "author": {
                "id": 1,
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
            "added_at": "2021-05-27T14:58:04.334631+02:00",
            "html": "string",
            "summary": "string",
            "deleted": false,
            "collapsed": false,
            "comment_count": 2,
            "vote_count": 2,
            "flag_count": 0,
            "share_count": 0,
            "addressing": [],
            "title": "string",
            "slug": "string",
            "view_count": 3,
            "follower_count": 0
        },
        "type": "string",
        "active_at": "2021-06-07T12:24:23.830573+02:00",
        "comment": {
            "id": 70,
            "discussion": 2,
            "author": {
                "id": 7,
                "username": "string",
                "real_name": "string",
                "description": "string",
                "avatar": "string",
                "ext_id": 3,
                "tags": [],
                "reputation": 13,
                "followings_counter": 7,
                "followers_counter": 2,
                "posts_counter": 4,
                "discussions_counter": 3,
                "statuses_counter": 0,
                "polls_counter": 1
            },
            "added_at": "2021-06-07T12:24:23.830573+02:00",
            "html": "string",
            "summary": "string",
            "deleted": false,
            "collapsed": false,
            "parent": {
                "id": 69,
                "discussion": 2,
                "author": {
                    "id": 1,
                    "username": "string",
                    "real_name": "string",
                    "description": "string",
                    "avatar": "string",
                    "ext_id": "string",
                    "tags": [],
                    "reputation": 86,
                    "followings_counter": 7,
                    "followers_counter": 2,
                    "posts_counter": 4,
                    "discussions_counter": 3,
                    "statuses_counter": 0,
                    "polls_counter": 1
                },
                "added_at": "2021-06-07T12:30:44.50912+02:00",
                "html": "string",
                "summary": "string",
                "deleted": false,
                "collapsed": false,
                "parent": [],
                "in_reply_to": [],
                "comment_count": 1,
                "vote_count": 0,
                "flag_count": 0
            },
            "in_reply_to": [],
            "comment_count": 0,
            "vote_count": 0,
            "flag_count": 0
        }
    }
}

```


</TabItem>
</Tabs>
````


>* notification.mention


````mdx-code-block


<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">


```json
{
    "event_id": 0,
    "type": "string",
    "created": 1625471209.139224,
    "data": {
        "recipients": [
            7
        ],
        "type": "string",
        "active_at": "2021-06-07T12:39:24.373244+02:00",
        "post": {
            "id": 24,
            "categories": [],
            "medias": [],
            "location": [],
            "poll": [],
            "last_activity_at": "2021-06-07T12:39:24.373244+02:00",
            "last_edited_at": null,
            "author": {
                "id": 1,
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
            "added_at": "2021-06-07T12:39:24.373244+02:00",
            "html": "string",
            "summary": "string",
            "deleted": false,
            "collapsed": false,
            "comment_count": 2,
            "vote_count": 2,
            "flag_count": 0,
            "share_count": 0,
            "addressing": [],
        }
    }
}

```


</TabItem>
</Tabs>
````


>* notification.vote_up


````mdx-code-block


<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">


```json
{
    "event_id": 0,
    "type": "string",
    "created": 1625471209.139224,
    "data": {
        "recipients": [
            48
        ],
        "discussion": {
            "id": 4,
            "categories": [],
            "medias": [],
            "location": [],
            "poll": [],
            "last_activity_at": "2021-05-28T17:35:00+02:00",
            "last_edited_at": null,
            "author": {
                "id": 48,
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
            "added_at": "2021-05-28T19:25:00+02:00",
            "html": "string",
            "summary": "string",
            "deleted": false,
            "collapsed": false,
            "comment_count": 2,
            "vote_count": 2,
            "flag_count": 0,
            "share_count": 0,
            "addressing": [],
            "title": "string",
            "slug": "string",
            "view_count": 3,
            "follower_count": 0
        },
        "type": "string",
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
          "ext_id": 3
        },
        "active_at": "2021-06-07T12:07:01.701850+02:00"
    }
}

```


</TabItem>
</Tabs>
````


>* notification.follow


````mdx-code-block


<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">


```json

{
    "event_id": 0,
    "type": "string",
    "created": 1625471209.139224,
    "data": {
        "recipients": [
            32
        ],
        "type": "string",
        "active_at": "2021-06-07T13:09:13.163550+02:00",
        "discussion": {
            "id": 14,
            "categories": [],
            "medias": [],
            "location": [],
            "poll": [],
            "last_activity_at": "2021-05-28T11:05:00+02:00",
            "last_edited_at": null,
            "author": {
                "id": 32,
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
            "added_at": "2021-05-28T22:56:00+02:00",
            "html": "string",
            "summary": "string",
            "deleted": false,
            "collapsed": false,
            "comment_count": 2,
            "vote_count": 2,
            "flag_count": 0,
            "share_count": 0,
            "addressing": [],
            "title": "string",
            "slug": "string",
            "view_count": 3,
            "follower_count": 0
        },
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
        }
    }
}
```


</TabItem>
</Tabs>
````

>* notification.private_message

````mdx-code-block


<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">


```json

{
    "event_id": 0,
    "type": "string",
    "created": 1625471209.139224,
    "data": {
        "recipients": [
            7
        ],
        "type": "string",
        "active_at": "2021-06-07T14:30:43.555649+02:00",
        "message": {
            "id": 1,
            "headline": "string",
            "sender": {
                "id": 1,
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
            "html": "string",
            "sent_at": "2021-06-07T14:30:43.555649+02:00",
            "status": 0
        }
    }
}
```


</TabItem>
</Tabs>
````


>* notification.deleted_for_advertising
* notification.deleted_for_aggressive
* notification.deleted_for_vulgar
* notification.deleted_for_poor
* notification.deleted_for_offtopic
* notification.undeleted_for
* notification.kindly_notice_advertising
* notification.kindly_notice_aggressive
* notification.kindly_notice_vulgar
* notification.kindly_notice_poor
* notification.kindly_notice_offtopic

````mdx-code-block


<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">


```json
{
    "event_id": 0,
    "type": "string",
    "created": 1625471209.139224,
    "data": {
        "recipients": [
            110
        ],
        "discussion": {
            "id": 5,
            "categories":[],
            "medias": [],
            "location": [],
            "poll": [],
            "last_activity_at": "2021-05-28T21:41:00+02:00",
            "last_edited_at": null,
            "author": {
                "id": 110,
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
            "added_at": "2021-05-28T09:16:00+02:00",
            "html": "string",
            "summary": "string",
            "deleted": false,
            "collapsed": false,
            "comment_count": 6,
            "vote_count": 2,
            "flag_count": 0,
            "share_count": 0,
            "addressing": [],
            "title": "string",
            "slug": "string",
            "view_count": 7,
            "follower_count": 0
        },
        "type": "string",
        "active_at": "2021-06-07T13:21:51.814550+02:00"
    }
}

```


</TabItem>
</Tabs>
````

>* notification.collapsed_for_advertising
* notification.collapsed_for_aggressive
* notification.collapsed_for_vulgar
* notification.collapsed_for_poor
* notification.collapsed_for_offtopic



````mdx-code-block


<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">


```json
{
    "event_id": 0,
    "type": "string",
    "created": 1625471209.139224,
    "data": {
        "recipients": [
            110
        ],
        "discussion": {
            "id": 9,
            "categories": [],
            "medias": [],
            "location": [],
            "poll": [],
            "last_activity_at": "2021-05-28T11:31:00+02:00",
            "last_edited_at": null,
            "author": {
                "id": 32,
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
                "reputation": 37,
                "followings_counter": 7,
                "followers_counter": 2,
                "posts_counter": 4,
                "discussions_counter": 3,
                "statuses_counter": 0,
                "polls_counter": 1
            },
            "added_at": "2021-05-28T07:11:00+02:00",
            "html": "string",
            "summary": "string",
            "deleted": false,
            "collapsed": false,
            "comment_count": 5,
            "vote_count": 1,
            "flag_count": 0,
            "share_count": 0,
            "addressing": [],
            "title": "string",
            "slug": "string",
            "view_count": 7,
            "follower_count": 0
        },
        "type": "string",
        "active_at": "2021-06-08T09:14:51.464044+02:00",
        "comment": {
            "id": 31,
            "discussion": 9,
            "author": {
                "id": 110,
                "username": "string",
                "real_name": "string",
                "description": "string",
                "avatar": "string",
                "ext_id": "string",
                "tags": [],
                "reputation": 23,
                "followings_counter": 7,
                "followers_counter": 2,
                "posts_counter": 4,
                "discussions_counter": 3,
                "statuses_counter": 0,
                "polls_counter": 1
            },
            "added_at": "2021-05-28T14:16:00+02:00",
            "html": "string",
            "deleted": false,
            "collapsed": true,
            "parent": {
                "id": 30,
                "discussion": 9,
                "author": {
                    "id": 56,
                    "username": "string",
                    "real_name": "string",
                    "description": "string",
                    "avatar": "string",
                    "ext_id": "string",
                    "tags": [],
                    "reputation": 39,
                    "followings_counter": 7,
                    "followers_counter": 2,
                    "posts_counter": 4,
                    "discussions_counter": 3,
                    "statuses_counter": 0,
                    "polls_counter": 1
                },
                "added_at": "2021-05-28T09:34:00+02:00",
                "html": "string",
                "deleted": false,
                "collapsed": false,
                "parent": [],
                "in_reply_to": [],
                "comment_count": 1,
                "vote_count": 0,
                "flag_count": 0
            },
            "in_reply_to": {
                "id": 30,
                "discussion": 9,
                "author": {
                    "id": 56,
                    "username": "string",
                    "real_name": "string",
                    "description": "string",
                    "avatar": "string",
                    "ext_id": "string",
                    "tags": [],
                    "reputation": 39,
                    "followings_counter": 7,
                    "followers_counter": 2,
                    "posts_counter": 4,
                    "discussions_counter": 3,
                    "statuses_counter": 0,
                    "polls_counter": 1
                },
                "added_at": "2021-05-28T09:34:00+02:00",
                "html": "string",
                "summary": "string",
                "deleted": false,
                "collapsed": false,
                "parent": [],
                "in_reply_to": [],
                "comment_count": 1,
                "vote_count": 0,
                "flag_count": 0
            },
            "comment_count": 0,
            "vote_count": 0,
            "flag_count": 1
        }
    }
}
```


</TabItem>
</Tabs>
````


>* notification.connection_request


````mdx-code-block


<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">


```json
{
    "event_id": 0,
    "type": "string",
    "created": 1625471209.139224,
    "data": {
        "recipients": [
            4
        ],
        "type": "string",
        "active_at": "2021-06-07T14:12:57.827680+02:00",
        "request_user": {
            "id": 1,
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
            "reputation": 88,
            "followings_counter": 7,
            "followers_counter": 2,
            "posts_counter": 4,
            "discussions_counter": 3,
            "statuses_counter": 0,
            "polls_counter": 1
        }
    }
}

```


</TabItem>
</Tabs>
````


>* notification.connection_accept



````mdx-code-block


<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">


```json

{
    "event_id": 0,
    "type": "string",
    "created": 1625471209.139224,
    "data": {
        "recipients": [
            4
        ],
        "type": "string",
        "active_at": "2021-06-07T14:12:57.827680+02:00",
        "accept_user": {
            "id": 33,
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
            "reputation": 17,
            "followings_counter": 7,
            "followers_counter": 2,
            "posts_counter": 4,
            "discussions_counter": 3,
            "statuses_counter": 0,
            "polls_counter": 1
        }
    }
}
```


</TabItem>
</Tabs>
````

>* notification.user_follow



````mdx-code-block


<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">


```json
{
    "event_id": 0,
    "type": "string",
    "created": 1625471209.139224,
    "data": {
        "recipients": [
            114
        ],
        "type": "string",
        "active_at": "2021-06-07T11:23:39.055083+02:00",
        "follower": {
            "id": 1,
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
        }
    }
}

```


</TabItem>
</Tabs>
````


>* notification.blocked_user


````mdx-code-block


<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">


```json

{
    "event_id": 0,
    "type": "string",
    "created": 1625471209.139224,
    "data": {
        "recipients": [
            122
        ],
        "type": "string",
        "active_at": "2021-06-07T13:48:25.594550+02:00",
        "block_settings": {
            "blocked_at": "2021-06-07T13:48:25.543115+02:00",
            "days_blocked": 1,
            "expire_at": "2021-06-08T13:48:25.543115+02:00"
        }
    }
}
```


</TabItem>
</Tabs>
````

>* notification.unblocked_user


````mdx-code-block


<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">


```json
{
    "event_id": 0,
    "type": "string",
    "created": 1625471209.139224,
    "data": {
        "recipients": [
            122
        ],
        "type": "string",
        "active_at": "2021-06-07T13:50:38.541768+02:00"
    }
}

```


</TabItem>
</Tabs>
````


>* notification.custom_notification

````mdx-code-block


<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">


```json
{
    "event_id": 0,
    "type": "string",
    "created": 1625471209.139224,
    "data": {
        "recipients": [
            4,
            7
        ],
        "type": "string",
        "active_at": "2021-06-07T12:58:19.079810+02:00",
        "custom_notification": {
            "id": 1,
            "type": "string",
            "embed": [],
            "title": "string",
            "description": "blablabla"
        },
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
        }
    }
}

```


</TabItem>
</Tabs>
````


>* notification.banner.sent


````mdx-code-block


<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">


```json

{
    "event_id": 0,
    "type": "string",
    "created": 1625471209.139224,
    "data": {
        "banner": {
            "title": "string",
            "body_text": "string",
            "link_text": "string",
            "link": "https://example.com",
            "open_in_new_tab": false,
            "image": "string",
            "added_at": "2021-06-08T09:56:48.540278+02:00",
            "type_banner": "string"
        },
        "recipients": [
            1,
            2,
            3,
        ]
    }
}
```


</TabItem>
</Tabs>
````