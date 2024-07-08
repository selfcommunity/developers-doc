---
sidebar_label: Flagged Contribution
sidebar_position: 1
title: Flagged Contribution
---

```json
{
  "contribution_type": "string",
  "contribution": {
    "id": "integer",
    "author": "{ModerationUser}",
    "added_at": "string",
    "categories": [],
    "title": "string",
    "html": "string",
    "summary": "string",
    "deleted": "boolean",
    "collapsed": "boolean",
    "parent": "integer",
    "in_reply_to": "integer",
    "comment_count": "integer",
    "vote_count": "integer",
    "reactions_count": [],
    "flag_count": "integer",
    "flag_count_detail": {
      "1": "integer",
      "2": "integer",
      "3": "integer",
      "4": "integer",
      "0": "integer"
    },
    "media_count_detail": {},
    "share_count": "integer",
    "has_poll": "boolean",
    "thread_id": "integer",
    "thread_type": "string",
    "thread_slug": "string"
  },
  "last_flagged_at": "string",
  "moderation_status": "string",
  "moderation_type": "string",
  "moderation_by": {},
  "moderation_at": "string"
}

```

#### Properties

| Name              | Type                                                                                                                                                                                                   | Required | Restrictions | Description                         |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|--------------|-------------------------------------|
| contribution_type | [string](/docs/apireference/v2/schemas/flagged_contribution#enumerated-values)                                                                                                                         | true     | none         | post, discussion, status or comment |
| contribution      | [Post](/docs/apireference/v2/schemas/post), [Discussion](/docs/apireference/v2/schemas/discussion), [Status](/docs/apireference/v2/schemas/status) or [Comment](/docs/apireference/v2/schemas/comment) | true     | none         | the contribution                    |
| last_flagged_at   | string(date-time)                                                                                                                                                                                      | true     | none         | date time of the last flag          |
| moderation_status | [string](/docs/apireference/v2/schemas/flagged_contribution#enumerated-values-1)                                                                                                                       | true     | none         | moderation status                   |
| moderation_type   | [string](/docs/apireference/v2/schemas/flagged_contribution#enumerated-values-2)                                                                                                                       | false    | none         | cause of the moderation             |
| moderation_by     | [User](/docs/apireference/v2/schemas/user)                                                                                                                                                             | false    | none         | moderator                           |
| moderation_at     | string(date-time)                                                                                                                                                                                      | true     | none         | date time of the moderation         |

#### Enumerated Values

| Property          | Value      |
|-------------------|------------|
| contribution_type | discussion |
| contribution_type | post       |
| contribution_type | comment    |

#### Enumerated Values

| Property          | Value   |
|-------------------|---------|
| moderation_status | ignored |
| moderation_status | deleted |
| moderation_status | hidden  |

#### Enumerated Values

| Parameter       | Value | Description |
|-----------------|-------|-------------|
| moderation_type | 0     | spam        |h
| moderation_type | 1     | aggressive  |
| moderation_type | 2     | vulgar      |
| moderation_type | 3     | poor        |
| moderation_type | 4     | offtopic    |

#### Field media_count_detail possible keys

| Key    |
|--------|
| url    |
| embed  |
| image  |
| eimage |
| doc    |
| share  |

