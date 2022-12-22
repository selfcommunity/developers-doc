---
sidebar_label: Avatar
sidebar_position: 1
title: Avatar
---

```json
{
    "id": "integer",
    "primary": "boolean",
    "avatar": "string(uri)",
    "date_uploaded": "string",
    "user": "integer"
}

```

#### Properties

|Name|Type|Description|
|---|---|---|
|id|integer|Unique integer value identifying this avatar|
|primary|boolean|Is the primary avatar for the user?|
|avatar|string(binary)¦null|The avatar url|
|date_uploaded|string(date-time)|Upload datetime|
|user|integer|The id of the user for this avatar|

