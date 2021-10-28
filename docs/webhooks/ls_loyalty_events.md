---
sidebar_label: List of Loyalty Events
sidebar_position: 8
title: List of Loyalty Events
---



| Loyalty                       | Triggered When                                 | Note                                                                                 |
|-------------------------------|------------------------------------------------|--------------------------------------------------------------------------------------|
| loyalty.prize.created         | a new prize has been created                   | This event is triggered only if `loyalty_points_collection` community option is true |
| loyalty.prize.updated         | a prize has been updated                       | This event is triggered only if `loyalty_points_collection` community option is true |
| loyalty.prize_request.created | a new request of a prize has been created      | This event is triggered only if `loyalty_points_collection` community option is true |
| loyalty.prize_request.updated | a request of a prize has been updated (status) | This event is triggered only if `loyalty_points_collection` community option is true |


>* loyalty.prize.created
>* loyalty.prize.updated


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
        "active": true,
        "created_by": {
            "id": 1,
            "username": "string",
            "real_name": "string",
            "email": "user@example.com",
            "description": "string",
            "avatar": "string"
        },
        "title": "string",
        "description": "string",
        "points": 200,
        "link": "https://example.com",
        "image": "string",
        "created_at": "2021-06-07T10:36:29.850060+02:00",
        "lastmod_datetime": "2021-06-07T10:36:29.850136+02:00"
    }
}
```

</TabItem>
</Tabs>
````

>* loyalty.prize_request.created
>* loyalty.prize_request.updated

````mdx-code-block

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "event_id": 0,
    "type": "string",
    "created": 1625471209.139224,
    "data": {
        "id": 1,
        "user": {
            "id": 1,
            "username": "string",
            "real_name": "string",
            "email": "user@example.com",
            "description": "string",
            "avatar": "string"
        },
        "pending_at": "2021-06-07T11:11:06.148633+02:00",
        "prize": {
            "id": 2,
            "active": true,
            "title": "string",
            "description": "string",
            "points": 1,
            "link": "https://example.com",
            "image": "string"
        },
        "prize_points": 1,
        "status": 0,
        "status_description": "string"
    }
}
```

</TabItem>
</Tabs>
````