---
sidebar_label: Prize
sidebar_position: 1
title: Prize
---

## SCPrizeType

#### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|id|number|true|The ID of the prize|
|active|boolean|false|The active status of the prize|
|title|string|true|The title of the prize|
|description|string|false|The prize description|
|points|number|true|Points to request the prize|
|created_at|Date|false|Date of prize creation|
|lastmod_datetime|Date|false|Date of last modify|
|created_by|object|false|[SCUserType](../Types/user)|The prize creator|
|image|string|false|Image of this prize|
|link|string|false|Link to a web resource for this prize|
