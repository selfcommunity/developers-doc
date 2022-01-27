---
sidebar_label: List of Category Events
sidebar_position: 5
title: List of Category Events
---


| Category          | Triggered When                       | Note |
|-------------------|--------------------------------------|------|
| category.follow   | a category is followed by the user   | ---  |
| category.unfollow | a category is unfollowed by the user | ---  |



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
        "category": {
            "id": 1,
            "tags": [],
            "order": 123,
            "name": "string",
            "name_synonyms": "string",
            "slug": "string",
            "slogan": "string",
            "html_info": "string",
            "seo_title": "string",
            "seo_description": "string",
            "auto_follow": "none",
            "active": true,
            "deleted": true,
            "image_original": "string",
            "image_bigger": "string",
            "image_big": "string",
            "image_medium": "string",
            "image_small": "string",
            "emotional_image_original": "string",
            "emotional_image_position": 0,
            "lastmod_datetime": "2019-08-24T14:15:22Z",
            "stream_order_by": "recent",
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
            "followings_counter": 1,
            "followers_counter": 1,
            "posts_counter": 3,
            "discussions_counter": 5,
            "statuses_counter": 1,
            "polls_counter": 8
        },
        "added_at": "2021-05-28T11:15:10.126738+02:00"
    }
}
```

</TabItem>
</Tabs>
````