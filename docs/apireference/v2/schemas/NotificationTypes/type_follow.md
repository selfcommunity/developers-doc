---
sidebar_label: Notification Type Follow
sidebar_position: 1
title: Notification Type Follow
---
```json
{
   "is_new": "boolean",
   "sid": "string",
   "type": "string",
   "active_at": "string",
   "discussion/post/status/user": {}
}
```

Example preview:

![Notification](/img/notification_types/follow.png)

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_new|boolean|false|read-only|If true, the notification has been read|
|sid|string|false|read-only|Serialization id of the notification|
|type|string|false|read-only|Type "follow"|
|active_at|string(date-time)|false|read-only|Time when the notification was generated|
|discussion|[Discussion](/docs/apireference/v2/schemas/discussion)|false|read-only|if a discussion is followed|
|post|[Post](/docs/apireference/v2/schemas/post)|false|read-only|if a post is followed|
|status|[Status](/docs/apireference/v2/schemas/status)|false|read-only|if a status is followed|
|user|[User](/docs/apireference/v2/schemas/user)|true|read-only|Follower user|
