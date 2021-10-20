---
sidebar_label: Incubator
sidebar_position: 1
title: Incubator
---

```json
{
  "id": 0,
  "name": "string",
  "slug": "string",
  "slogan": "string",
  "status": 0,
  "approved_category": {
    "id": 0,
    "tags": [
      {
        "id": 0,
        "active": true,
        "type": "user",
        "name": "string",
        "description": "string",
        "color": "string",
        "visible": true,
        "visibility_boost": true,
        "deleted": true,
        "created_at": "2019-08-24T14:15:22Z"
      }
    ],
    "order": -2147483648,
    "name": "string",
    "name_synonyms": "string",
    "slug": "string",
    "slogan": "string",
    "html_info": "string",
    "seo_title": "string",
    "seo_description": "string",
    "auto_follow": "none",
    "active": true,
    "deleted": true,
    "image_original": "string",
    "image_bigger": "string",
    "image_big": "string",
    "image_medium": "string",
    "image_small": "string",
    "emotional_image_original": "string",
    "emotional_image_position": -2147483648,
    "lastmod_datetime": "2019-08-24T14:15:22Z",
    "stream_order_by": "recent"
  },
  "added_at": "2019-08-24T14:15:22Z",
  "user": {
    "id": 0,
    "username": "string",
    "real_name": "string",
    "avatar": "string",
    "ext_id": "string"
  },
  "subscribers_count": "string",
  "subscribers_threshold": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|slug|string|false|none|none|
|slogan|string¦null|false|none|none|
|status|integer|false|none|none|
|approved_category|[Category](../schemas/category)|false|read-only|none|
|added_at|string(date-time)|false|none|none|
|user|[User](../schemas/user)|false|read-only|none|
|subscribers_count|string|false|read-only|none|
|subscribers_threshold|string|false|read-only|none|

#### Enumerated Values

|Property|Value|Description|
|---|---|---|
|status|0|pending|
|status|1|proposal|
|status|2|approved|
|status|3|ignored|