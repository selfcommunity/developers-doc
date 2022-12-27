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

|Name|Type|Required|Restrictions| Description                                   |
|---|---|---|---|-----------------------------------------------|
|id|integer|false|read-only| A unique integer value identifying this prize |
|active|boolean|false|none| If true, the prize is active                  |
|title|string|true|none| The prize title                               |
|description|string¦null|false|none| The prize description                         |
|points|integer(int64)|true|none| Points to request this prize                  |
|link|string(uri)¦null|false|none| Link to a web resource for this prize         |
|image|string(binary)|true|none| The prize image                               |
|created_at|string(date-time)|false|read-only| Datetime of prize creation                    |
|lastmod_datetime|string(date-time)|false|read-only| Date of prize last modify                     |
|created_by|object|false|read-only| [User](/docs/apireference/v2/schemas/user)    |

