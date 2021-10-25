---
sidebar_label: Endpoint
sidebar_position: 1
title: Endpoint
---

```json
{
  "id": 0,
  "created_at": "2019-08-24T14:15:22Z",
  "updated_at": "2019-08-24T14:15:22Z",
  "is_active": true,
  "target": "https://example.com",
  "description": "string",
  "events": [
    {
      "type": "comment.created",
      "added_at": "2019-08-24T14:15:22Z"
    }
  ],
  "ssl_cert_verification": true
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






