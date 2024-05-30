---
sidebar_label: List of Connection Events
sidebar_position: 1
title: List of Connection Events
---

| Event                        | Triggered When                                          | Note                                                                       |
|------------------------------|---------------------------------------------------------|----------------------------------------------------------------------------|
| connection_request.created   | a new connection request is created                     | This event is triggered only if `follow_enabled` community option is false |
| connection_request.rejected  | a connection request is rejected                        | This event is triggered only if `follow_enabled` community option is false |
| connection_request.restored  | a connection request that has been rejected is restored | This event is triggered only if `follow_enabled` community option is false |
| connection_request.cancelled | a connection request is cancelled by the creator        | This event is triggered only if `follow_enabled` community option is false |
| connection.created           | a new connection is created                             | This event is triggered only if `follow_enabled` community option is false |
| connection.deleted           | a connection is deleted                                 | This event is triggered only if `follow_enabled` community option is false |
| connection.follow            | a user follows another user                             | This event is triggered only if `follow_enabled` community option is true  |
| connection.unfollow          | a user unfollows another user                           | This event is triggered only if `follow_enabled` community option is true  |

> * connection_request.created
>* connection_request.rejected
>* connection_request.cancelled
>* connection.created
>* connection.deleted

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
        "to_user": {
            "id": 33,
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
            "connection_requests_sent_counter": 1,
            "connection_requests_received_counter": 0,
            "connections_counter": 0,
            "posts_counter": 0,
            "discussions_counter": 0,
            "statuses_counter": 0,
            "polls_counter": 0
        },
        "from_user": {
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
            "connection_requests_sent_counter": 1,
            "connection_requests_received_counter": 0,
            "connections_counter": 0,
            "posts_counter": 0,
            "discussions_counter": 0,
            "statuses_counter": 0,
            "polls_counter": 0
        }
    }
}
```

</TabItem>
</Tabs>
````

> * connection.follow
>* connection.unfollow

````mdx-code-block

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "event_id": 0,
    "type": "string",
    "created": 1625471209.139224,
    "data": {
        "to_user": {
            "id": 114,
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
            "reputation": 14,
            "connection_requests_sent_counter": 1,
            "connection_requests_received_counter": 0,
            "connections_counter": 0,
            "posts_counter": 0,
            "discussions_counter": 0,
            "statuses_counter": 0,
            "polls_counter": 0
        },
        "from_user": {
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
            "reputation": 81,
            "connection_requests_sent_counter": 1,
            "connection_requests_received_counter": 0,
            "connections_counter": 0,
            "posts_counter": 0,
            "discussions_counter": 0,
            "statuses_counter": 0,
            "polls_counter": 0
        }
    }
}
```

</TabItem>
</Tabs>
````