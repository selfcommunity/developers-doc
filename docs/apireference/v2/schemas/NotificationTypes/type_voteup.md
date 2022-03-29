---
sidebar_label: Notification Type Vote Up
sidebar_position: 1
title: Notification Type Vote Up
---

```json
{
  "is_new": true,
  "sid": 16053709616960000000063090,
  "type": "vote_up",
  "active_at": "2020-11-14T17:52:20.967302+01:00",
  "user": {},
  "discussion": {},
  "post": {},
  "comment": {},
  "status": {}
}
```

Example preview:

![Notification](/img/notification_types/voteup.png)

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_new|boolean|true|read-only|Notification not yet read|
|sid|string|true|read-only|Serialization id of the notification|
|type|string|true|read-only|Type "vote_up"|
|active_at|string(date-time)|true|read-only|Time when the notification was generated|
|user|[User](/docs/apireference/v2/schemas/user)|true|read-only|user who voted up|
|discussion|[Discussion](/docs/apireference/v2/schemas/discussion)|false|read-only|if a discussion is voted up|
|post|[Post](/docs/apireference/v2/schemas/post)|false|read-only|if a post is voted up|
|comment|[Comment](/docs/apireference/v2/schemas/comment)|false|read-only|if a comment is voted up|
|status|[Status](/docs/apireference/v2/schemas/status)|false|read-only|if a status is voted up|

