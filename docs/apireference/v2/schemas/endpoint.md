---
sidebar_label: Endpoint
sidebar_position: 1
title: Endpoint
---

```json
{
  "id": "integer",
  "created_at": "string",
  "updated_at": "string",
  "is_active": "boolean",
  "target": "string",
  "description": "string",
  "events": [
    {
      "type": "string",
      "added_at": "string"
    }
  ],
  "ssl_cert_verification": "boolean"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|created_at|string(date-time)|false|read-only|none|
|updated_at|string(date-time)|false|read-only|none|
|is_active|boolean|false|none|none|
|target|string(uri)|true|none|none|
|description|string|false|none|none|
|events|list|true|none|none|
|» type|string|true|none|none|
|» added_at|string(date-time)|false|read-only|none|
|ssl_cert_verification|body|boolean|false|True if the SSL certificates for HTTPS requests must be enabled|






