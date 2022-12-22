---
sidebar_label: Private Message File
sidebar_position: 1
title: Private Message File
---

```json
{
  "uuid": "string",
  "filename": "string",
  "filesize": "integer",
  "mimetype": "string",
  "duration": "integer",
  "url": "string(uri)",
  "thumbnail": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uuid|integer|false|read-only|The file id|
|filename|string|false|none|The name of the file|
|filesize|integer|false|none|The size of the file|
|mimetype|string|false|none|The type of the file|
|duration|integer|false|none|The duration (in seconds) of the file| 
|url|string(uri)¦null|false|none|Url for the resource, if any|
|thumbnail|string|false|none|Thumbnail url for the resource, if any|


