---
sidebar_label: Incubator
sidebar_position: 1
title: Incubator
---

```json
{
  "id": "integer",
  "name": "string",
  "slug": "string",
  "slogan": "string",
  "status": "integer",
  "approved_category": {},
  "added_at": "string",
  "user": {
    "id": "integer",
    "username": "string",
    "real_name": "string",
    "avatar": "string",
    "ext_id": "integer"
  },
  "subscribers_count": "integer",
  "subscribers_threshold": "integer",
  "subscribed": "boolean"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|The unique integer value identifying the incubator|
|name|string|true|none|The name of the incubator|
|slug|string|false|none|The slug identifying the incubator in a URL|
|slogan|string¦null|false|none|The slogan of the incubator|
|status|integer|false|none|The incubator statuses|
|approved_category|[Category](/docs/apireference/v2/schemas/category)|false|read-only|The approved category obj|
|added_at|string(date-time)|false|none|The datetime of the incubator creation|
|user|[User](/docs/apireference/v2/schemas/user)|false|read-only|The user who created the incubator|
|subscribers_count|integer|false|read-only|The number of incubator suscribers|
|subscribers_threshold|integer|false|read-only|The number of subscribers required to approve the incubator|
|subscribed|boolean|false|none|If the authenticated user has subscribed to the incubator|

#### Enumerated Values

|Property|Value|Description|
|---|---|---|
|status|0|pending|
|status|1|proposal|
|status|2|approved|
|status|3|ignored|