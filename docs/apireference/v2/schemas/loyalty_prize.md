---
sidebar_label: Loyalty Prize
sidebar_position: 1
title: Loyalty Prize
---

```json
{
  "id": 0,
  "active": true,
  "title": "string",
  "description": "string",
  "points": 0,
  "link": "https://example.com",
  "image": "string",
  "created_at": "2019-08-24T14:15:22Z",
  "lastmod_datetime": "2019-08-24T14:15:22Z",
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
|created_by|object|false|read-only|[User](../schemas/user)|

