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
    "followed": false,
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
    "image_original": "string",
    "image_bigger": "string",
    "image_big": "string",
    "image_medium": "string",
    "image_small": "string",
    "emotional_image_original": "string",
    "emotional_image_position": -2147483648,
    "lastmod_datetime": "2019-08-24T14:15:22Z",
    "stream_order_by": "recent",
    "followers_counter": 13
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
  "subscribers_threshold": "string",
  "subscribed": true
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
|approved_category|[Category](../schemas/category)|false|read-only|The approved category obj|
|added_at|string(date-time)|false|none|The datetime of the incubator creation|
|user|[User](../schemas/user)|false|read-only|The user who created the incubator|
|subscribers_count|string|false|read-only|The number of incubator suscribers|
|subscribers_threshold|string|false|read-only|The number of subscribers required to approve the incubator|
|subscribed|boolean|false|none|If the authenticated user has subscribed to the incubator|

#### Enumerated Values

|Property|Value|Description|
|---|---|---|
|status|0|pending|
|status|1|proposal|
|status|2|approved|
|status|3|ignored|