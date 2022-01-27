---
sidebar_label: Category
sidebar_position: 1
title: Category
---



### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|id|number|false|The ID of the category|
|order|number|false|The manual ordering number of the category|
|name|string|true|The name of the category|
|name_synonyms|string|false|The synonyms/aliases of the category|
|slug|string|true|The slug of the category|
|slogan|string|false|The slogan of the category|
|html_info|string|false|The category's html text|
|seo_title|string|false|The category's html meta tag|
|seo_description|string|false|The description for category's html meta tag|
|auto_follow|string|false|The category's auto follow behaviour|
|active|boolean|false|The category status|
|deleted|boolean|false|The category status|
|image_original|string|false|The category's image with min size|
|image_bigger|string|false|The category's auto generated bigger size|
|image_big|string|false|The category's auto generated big size|
|image_medium|string|false|The category's auto generated medium size|
|image_small|string|false|The category's auto generated small size|
|emotional_image_original|string|false|The landscape format image for category hub|
|emotional_image_position|number|false|The css background-position|
|lastmod_datetime|string|false|The last modify (datetime)|
|stream_order_by|string|false|The order of the category feed|
|tags|[SCTagType](../Types/tag)|false|The category's tags|
|followers_count|number|false|Followers counter for the category|