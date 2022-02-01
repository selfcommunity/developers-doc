---
sidebar_label: Tag
sidebar_position: 1
title: Tag
---



### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|id|number|false|Unique integer value identifying this tag|
|type|string|true|The type of the tag (unique together name)|
|name|string|true|The name of the tag (unique together type)|
|description|string|false|Short description of the tag|
|color|string|false|Hexadecimal format color code with prefix '#'|
|visible|boolean|false|Tag publicly visible|
|visibility_boost|boolean|false|The tag has a visibility boost|
|created_at|string|false|Creation date time|
|active|boolean|false|Tag active or not|
|deleted|boolean|false|Tag deleted or not|