---
sidebar_label: Custom Notification
sidebar_position: 1
title: Custom Notification
---

```json
{
  "id": 0,
  "type": "string",
  "embed": {
    "id": 0,
    "embed_type": "string",
    "embed_id": "string",
    "url": "https://example.com",
    "metadata": "{}"
  },
  "title": "string",
  "description": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|type|string|true|none|Custom type notification|
|embed|[Embed](../schemas/embed)|false|none|Embed object if exist|
|title|string¦null|false|none|Notification title|
|description|string¦null|false|none|Notification description|
