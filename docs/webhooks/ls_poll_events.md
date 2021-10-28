---
sidebar_label: List of Poll Events
sidebar_position: 9
title: List of Poll Events
---


| Poll              | Triggered When                     | Note |
|-------------------|------------------------------------|------|
| poll_vote.created | a user votes a poll                | ---  |
| poll_vote.deleted | a user remove the vote from a poll | ---  |



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
        "choice": {
            "id": 3,
            "choice": "string",
            "order": 0,
            "added_at": "2021-06-07T10:23:02.074940+02:00",
            "deleted": false,
            "vote_count": 0,
            "poll": {
                "id": 2,
                "title": "string",
                "multiple_choices": true,
                "added_at": "2021-06-07T10:23:02.036315+02:00",
                "modified_at": "2021-06-07T10:23:02.036371+02:00",
                "closed": false,
                "expiration_at": "2021-06-27T00:00:00+02:00",
                "hidden": false,
                "choices": [
                    {
                        "id": 3,
                        "choice": "string",
                        "order": 0,
                        "added_at": "2021-06-07T10:23:02.074940+02:00",
                        "deleted": false,
                        "vote_count": 1
                    },
                    {
                        "id": 4,
                        "choice": "string",
                        "order": 1,
                        "added_at": "2021-06-07T10:23:02.081369+02:00",
                        "deleted": false,
                        "vote_count": 0
                    }
                ]
            }
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