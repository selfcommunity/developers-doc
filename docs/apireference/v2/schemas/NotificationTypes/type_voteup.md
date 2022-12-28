---
sidebar_label: Notification Type Vote Up
sidebar_position: 1
title: Notification Type Vote Up
---

```json
{
  "is_new": "boolean",
  "sid": "string",
  "type": "string",
  "active_at": "string",
  "user/discussion/post/comment/status": {}
}
```

Example preview:

![Notification](/img/notification_types/voteup.png)

#### Properties

|Name|Type|Required|Restrictions| Description                              |
|---|---|---|---|------------------------------------------|
|is_new|boolean|true|read-only| Notification not yet read                |
|sid|string|true|read-only| Serialization id of the notification     |
|type|string|true|read-only| Type "vote_up"                           |
|active_at|string(date-time)|true|read-only| Time when the notification was generated |
|user|[User](/docs/apireference/v2/schemas/user)|true|read-only| The user who voted up                    |
|discussion|[Discussion](/docs/apireference/v2/schemas/discussion)|false|read-only| If a discussion is voted up              |
|post|[Post](/docs/apireference/v2/schemas/post)|false|read-only| If a post is voted up                    |
|comment|[Comment](/docs/apireference/v2/schemas/comment)|false|read-only| If a comment is voted up                 |
|status|[Status](/docs/apireference/v2/schemas/status)|false|read-only| If a status is voted up                  |

