---
sidebar_label: Custom Adv
sidebar_position: 1
title: Custom Adv
---

```json
{
  "id": 0,
  "position": "BELOW_TOPBAR",
  "title": "string",
  "link": "http://example.com",
  "image": "string",
  "embed_code": "string",
  "active": true,
  "created_at": "2019-08-24T14:15:22Z",
  "lastmod_datetime": "2019-08-24T14:15:22Z",
  "category": 0,
  "created_by": 0
}
```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|Unique integer value identifying this adv|
|position|string|true|none|A string code representing the display position of the adv|
|title|string|true|none|The title of the adv|
|link|string(uri)¦null|false|none|The link/url of the adv|
|image|string(binary)¦null|false|none|An image banner for the adv|
|embed_code|string¦null|false|none|Html/js embeddable code|
|active|boolean|false|none|A flag to activate or deactivate this adv|
|created_at|string(date-time)|false|none|datetime of creation|
|lastmod_datetime|string(date-time)|false|none|last modify datetime|
|category|integer¦null|false|none|The id of the category connected to this adv|
|created_by|integer|true|none|The id of the creator of this adv|

#### Position valid Values

|Value|
|---|
|BELOW_TOPBAR|
|BELOW_THE_POST|
|ABOVE_FOOTER_BAR|
|FOOTER_STICKY|
|IN_POST_COMMENTS|
|RELATED_POSTS_COLUMN|
|TOOLS_COLUMN|
|IN_STREAM|