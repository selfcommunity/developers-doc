---
sidebar_label: List of Group Events
sidebar_position: 1
title: List of Group Events
---

| Event                | Triggered When                                                                                                                                                       | Note |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|------|
| group.user_added     | a user becomes a member of a group: subscribes on their own, accepts an invite, is added by the group manager or by an administrator, or his request is accepted      | ---  |
| group.user_removed   | a user leaves a group or is removed by the group manager or by an administrator                                                                                      | ---  |
| group.user_requested | a user requests to join a private group                                                                                                                              | ---  |
| group.user_invited   | a user is invited to join a group by the group manager                                                                                                               | ---  |

:::note

These events are triggered whatever the notifications are: they are also triggered when the group membership is changed
with the `silent` parameter of the [subscribe](/docs/apireference/v2/group/subscribe_or_accept_invite_to_group) and
[unsubscribe](/docs/apireference/v2/group/unsubscribe_from_group) endpoints.

:::

The `data` object contains:

| Name  | Type   | Description                                                                                                                       |
|-------|--------|-----------------------------------------------------------------------------------------------------------------------------------|
| group | object | The group the event is about (`id`, `name`, `slug` and `privacy`); use the [group info](/docs/apireference/v2/group/get_group_info) endpoint for the other fields |
| user  | object | The [User](/docs/apireference/v2/schemas/user) the event is about                                                                 |
| by    | object | The [User](/docs/apireference/v2/schemas/user) who performed the operation; it is the same user as `user` when the user acted on their own |

> * group.user_added
>* group.user_removed
>* group.user_requested
>* group.user_invited

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
        "group": {
            "id": 7,
            "name": "string",
            "slug": "string",
            "privacy": "private"
        },
        "user": {
            "id": 100,
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
            "connection_requests_sent_counter": 1,
            "connection_requests_received_counter": 0,
            "connections_counter": 0,
            "posts_counter": 0,
            "discussions_counter": 0,
            "statuses_counter": 0,
            "polls_counter": 0
        },
        "by": {
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
