---
sidebar_label: Custom Adv
sidebar_position: 1
title: Custom Adv
---

## SCCustomAdvType 

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|id|number|false|Unique integer value identifying this adv|
|position|[SCCustomAdvPosition](#sccustomadvposition)|false|A string code representing the display position of the adv|
|title|string/null|false|The title of the adv|
|link|string/null|false|The link/url of the adv|
|image|string/null|false|An image banner for the adv|
|embed_code|string/null|false|Html/js embeddable code|
|active|boolean|false|A flag to activate or deactivate this adv|
|created_at|string|false|Datetime of adv creation|
|lastmod_datetime|string|false|Last adv modify datetime|
|category|number/null|false|The id of the category connected to this adv|


### SCCustomAdvPosition

|Name|Value|
|---|---|
|POSITION_BELOW_TOPBAR|'BELOW_TOPBAR'|
|POSITION_BELOW_FEED_OBJECT|'BELOW_THE_POST'|
|POSITION_ABOVE_FOOTER_BAR|'ABOVE_FOOTER_BAR'|
|POSITION_FOOTER_STICKY|'FOOTER_STICKY'|
|POSITION_IN_COMMENTS|'IN_POST_COMMENTS'|
|POSITION_RELATED_POSTS_COLUMN|'RELATED_POSTS_COLUMN'|
|POSITION_FEED_SIDEBAR|'TOOLS_COLUMN'|
|POSITION_FEED|'IN_STREAM'|