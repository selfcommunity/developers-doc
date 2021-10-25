---
sidebar_label: Notification Type Follow
sidebar_position: 1
title: Notification Type Follow
---
```json
{
    "is_new": true,
    "sid": 16053710571250000000007160,
    "type": "follow",
    "active_at": "2020-11-14T17:52:20.967302+01:00",
    "discussion": {...},
    "post": {...}
    "status": {...},
    "user": {...}
}
```

Example preview:

![Notification](/img/notification_types/follow.png)

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_new|boolean|false|read-only|True if the notification has been read, otherwise false|
|sid|string|false|read-only|Serialization id of the notification|
|type|string|false|read-only|Type "follow"|
|active_at|string(date-time)|false|read-only|Time when the notification was generated|
|discussion|[Discussion](#schemadiscussion)|false|read-only|if a discussion is followed|
|post|[Post](#schemadpost)|false|read-only|if a post is followed|
|status|[Status](#schemastatus)|false|read-only|if a status is followed|
|user|[User](#schemaduser)|true|read-only|Follower user|
