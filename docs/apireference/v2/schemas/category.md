---
sidebar_label: Category
sidebar_position: 1
title: Category
---

```json
{
  "id": 0,
  "tags": [],
  "followed": false,
  "order": 123,
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
  "emotional_image_position": 0,
  "lastmod_datetime": "2019-08-24T14:15:22Z",
  "stream_order_by": "recent",
  "followers_counter": 13
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|Unique integer value identifying this category|
|tags|[Object]¦[]|false|none|User's tag list. List of [Tag](/docs/apireference/v2/schemas/tag).|
|followed|boolean|false|none|If the category is followed by the authenticated user|
|order|integer|false|none|Manual ordering number|
|name|string|true|none|Unique name of the category|
|name_synonyms|string¦null|false|none|Newline (`\n`) separated list of synonyms/aliases|
|slug|string|true|none|Unique slug identifying this category in a URL (pass `_GENERATE_` to auto generate slug)|
|slogan|string¦null|false|none|Short slogan to describe the category|
|html_info|string¦null|false|none|HTML text containing some category information|
|seo_title|string¦null|false|none|Title for HTML meta tag|
|seo_description|string¦null|false|none|Description for HTML meta tag|
|auto_follow|string|false|none|Enum to define auto follow behaviour|
|active|boolean|false|none|Is this category active?|
|image_original|string(binary)¦null|false|none|Squared image with min size (600x600) if passed empty a default image will be used - original size|
|image_bigger|string(binary)|false|read-only|Squared image - auto generated bigger size|
|image_big|string(binary)|false|read-only|Squared image - auto generated big size|
|image_medium|string(binary)|false|read-only|Squared image - auto generated medium size|
|image_small|string(binary)|false|read-only|Squared image - auto generated small size|
|emotional_image_original|string(binary)¦null|false|none|Landscape format image for category hub (1920x1080) if passed empty a default image will be used|
|emotional_image_position|integer|false|none|Css background-position|
|lastmod_datetime|string(date-time)|false|read-only|Last modify date time|
|stream_order_by|string|false|none|Order of the category feed|
|followers_counter|integer|false|none|Number of category followers|

#### Enumerated Values

|Property|Value|Description|
|---|---|---|
|auto_follow|none|No auto following|
|auto_follow|default|New users will follow this category|
|auto_follow|forced|All users follow (and can't unfollow) this category|
|stream_order_by|recent|Order by last created (decreasing)|
|stream_order_by|last_activity|Order by last activity (creation, comments, ecc) (decreasing)|
