---
sidebar_label: Loyalty Prize
sidebar_position: 1
title: Loyalty Prize
---

```json
{
  "id": "integer",
  "active": "boolean",
  "title": "string",
  "description": "string",
  "points": "integer",
  "link": "string(uri)",
  "image": "string",
  "created_at": "string",
  "lastmod_datetime": "string",
  "created_by": {}
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|Unique integer value|
|active|boolean|false|none|Is this prize active?|
|title|string|true|none|The title of the prize|
|description|string¦null|false|none|A description of the prize|
|points|integer(int64)|true|none|Points to request this prize|
|link|string(uri)¦null|false|none|Link to a web resource for this prize|
|image|string(binary)|true|none|Image of this prize|
|created_at|string(date-time)|false|read-only|Date of creation|
|lastmod_datetime|string(date-time)|false|read-only|Date of last modify|
|created_by|object|false|read-only|[User](/docs/apireference/v2/schemas/user)|

