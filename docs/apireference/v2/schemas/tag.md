---
sidebar_label: Tag
sidebar_position: 1
title: Tag
---

```json
{
  "id": 0,
  "active": true,
  "name": "string",
  "type": "string",
  "description": "string",
  "color": "string",
  "visible": true,
  "visibility_boost": true,
  "created_at": "2019-08-24T14:15:22Z",
  "deleted": false
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|Unique integer value identifying this tag|
|type|string|true|none|The type of the tag (unique together name)|
|name|string|true|none|The name of the tag (unique together type)|
|description|string¦null|false|none|Short description of the tag|
|color|string|false|none|Hexadecimal format color code with #|
|visible|boolean|false|none|Is this tag publicly visible?|
|visibility_boost|boolean|false|none|The tag add a visibility boost|
|created_at|string(date-time)|false|read-only|Creation date time|
|active|boolean|false|none|Is this tag active?|
|deleted|boolean|false|none|Is this tag deleted?|

|Property|Value|Description|
|---|---|---|
|type|user|Only for user|
|type|category|Only for category|
