---
sidebar_label: Media
sidebar_position: 1
title: Media
---

```json
{
  "id": 0,
  "added_at": "2019-08-24T14:15:22Z",
  "type": "url",
  "title": "string",
  "description": "string",
  "url": "https://example.com",
  "image": "string",
  "image_width": 0,
  "image_height": 0,
  "order": 0,
  "embed": {
    "id": 0,
    "embed_type": "string",
    "embed_id": "string",
    "url": "string",
    "metadata": {}
  }
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|added_at|string(date-time)|false|read-only|none|
|type|string|true|none|none|
|title|string|false|read-only|none|
|description|string|false|read-only|none|
|url|string(uri)|false|none|none|
|image|string(binary)|false|read-only|none|
|image_width|integer|false|read-only|none|
|image_height|integer|false|read-only|none|
|order|integer|false|read-only|none|
|embed|[Embed](/docs/apireference/v2/schemas/embed)¦null|false|none|none|

#### Enumerated Values

|Property|Value|Description|
|---|---|---|
|type|vimeo|Media associated to an uploaded video on vimeo platform|
|type|url|Media associated to a webpage url|
|type|embed|Media of type embed|
|type|image|Media of type image|
|type|eimage|Media of type inline image, used in [Discussion](../discussion/get_all_discussions) or [Post](../post/get_all_posts)  text editor|
|type|doc|Media of type document (pdf)|
|type|share|Media associate to a community shared object ([Discussion](/docs/apireference/v2/schemas/discussion) or [Post](/docs/apireference/v2/schemas/post))|
