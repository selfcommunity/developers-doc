---
sidebar_label: Flag
sidebar_position: 1
title: Flag
---

```json
{
  "user": {},
  "added_at": "string",
  "flag_type": "integer",
  "flag_type_description": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|object|false|read-only|[User](/docs/apireference/v2/schemas/user)|
|added_at|string(date-time)|false|read-only|none|
|flag_type|integer|true|none|none|
|flag_type_description|string|false|read-only|none|

#### Enumerated Values

|Parameter|Value|Description|
|---|---|---|
|flag_type|0|spam|
|flag_type|1|aggressive|
|flag_type|2|vulgar|
|flag_type|3|poor|
|flag_type|4|offtopic|
