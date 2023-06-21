---
sidebar_label: List of User Events
sidebar_position: 13
title: List of User Events
---

| Event                       | Triggered When                                  | Note |
|-----------------------------|-------------------------------------------------|------|
| user.created                | a new user is created                           | ---  |
| user.updated                | a user is updated                               | ---  |
| user.deleted                | a user is deleted                               | ---  |
| user.settings_updated       | a user changes its settings                     | ---  |
| user.score_updated          | the score of the user has been updated          | ---  |
| user.loyalty_points_updated | the loyalty points of the user has been updated | ---  |

> * user.created
>* user.updated
>* user.deleted

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
```

</TabItem>
</Tabs>
````

> * user.settings_updated

````mdx-code-block

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "event_id": 0,
    "type": "string",
    "created": 1625471209.139224,
    "data": {
        "qa_frequency": 0,
        "email_notification_not_qa": 0,
        "mobile_notifications_scmty": 1,
        "toast_notifications_emit_sound": 1,
        "show_toast_notifications": 0,
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

> * user.score_updated

````mdx-code-block

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "event_id": 0,
    "type": "string",
    "created": 1625471209.139224,
    "data": {
        "id": 271,
        "user": {
            "id": 114,
            "username": "string",
            "real_name": "string",
            "email": "user@example.com",
            "description": "string",
            "avatar": "string",
            "reputation": 12
        },
        "score": -2,
        "reputation_type": -19,
        "reputation_type_description": "string",
        "comment": "string"
    }
}
```

</TabItem>
</Tabs>
````

> * user.loyalty_points_updated

````mdx-code-block

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "event_id": 0,
    "type": "string",
    "created": 1625471209.139224,
    "data": {
        "user": {
            "id": 1,
            "username": "string",
            "real_name": "string",
            "email": "user@example.com",
            "description": "string",
            "avatar": "string"
        },
        "action": "string",
        "points": 1,
        "added_at": "2021-06-07T11:23:39.105234+02:00",
        "total_points": 13
    }
}
```

</TabItem>
</Tabs>
````