---
sidebar_label: Feed Activity
sidebar_position: 1
title: Feed Activity
---

```json
{
  "type": "string",
  "comment": {},
  "author": {},
  "active_at": "string",
  "seen_by_id": []
}

```

#### Properties

|Name| Type                                                  |Required|Restrictions| Description                                                                         |
|---|-------------------------------------------------------|---|---|-------------------------------------------------------------------------------------|
|type| [string](/docs/apireference/v2/schemas/feed_activity#enumerated-values)                                            |false|read-only| Feed activity type                                                                  |
|comment| [Comment](/docs/apireference/v2/schemas/comment)¦null |false|read-only| Feed activity comment object                                                        |
|author| [User](/docs/apireference/v2/schemas/user)            |false|read-only| Feed activity user object                                                           |
|active_at| string(date-time)                                     |false|read-only| Datetime of activity                                                                |
|seen_by_id| list(integer)¦null                                    |false|read-only| List of [User](/docs/apireference/v2/schemas/user) ids that have seen this activity |

#### Enumerated Values

|Property|Value|Description|
|---|---|---|
|type|comment|The activity involved is a comment|
|type|vote|The activity involved is a vote|
|type|pollvote|The activity involved is a poll vote|
|type|follow|The activity involved is a follow. This type can be returned if the [Feed](/docs/apireference/v2/schemas/feed) represent a [Discussion](/docs/apireference/v2/schemas/discussion)|