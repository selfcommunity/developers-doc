---
sidebar_label: Custom Page
sidebar_position: 1
title: Custom Page
---

```json
{
  "id": 0,
  "slug": "string",
  "label": "string",
  "title": "string",
  "alternative_url": "string",
  "html_body": "string",
  "visible_in_menu": true,
  "order": -2147483648,
  "created_at": "2019-08-24T14:15:22Z",
  "lastmod_datetime": "2019-08-24T14:15:22Z",
  "active": true,
  "created_by": 0
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|Unique integer value identifying this page|
|slug|string|false|none|The url slug|
|label|string|true|none|A label for the link in the menu|
|title|string|true|none|The title of this page|
|alternative_url|string|false|none|An url usable in alternative to the full body of the page (typically for the menu)|
|html_body|string¦null|false|none|The html body pf the page|
|visible_in_menu|boolean|false|none|Is this page visible in menu?|
|order|integer|false|none|The extraction order of the page|
|created_at|string(date-time)|false|none|datetime of creation|
|lastmod_datetime|string(date-time)|false|none|last modify datetime|
|active|boolean|false|none|Is this page active?|
|created_by|integer|true|none|The id of the creator of this page|
