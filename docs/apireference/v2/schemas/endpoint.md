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

|Name|Type|Required|Restrictions| Description                                                    |
|---|---|---|---|----------------------------------------------------------------|
|id|integer|false|read-only| A unique integer value identifying this endpoint               |
|created_at|string(date-time)|false|read-only| Datetime of endpoint creation                                  |
|updated_at|string(date-time)|false|read-only| Datetime of endpoint last edit                                 |
|is_active|boolean|false|none| If true, endpoint is active                                    |
|target|string(uri)|true|none| The target                                                     |
|description|string|false|none| Endpoint description                                           |
|events|list|true|none| The events related to the endpoint                             |
|» type|string|true|none| The event type                                                 |
|» added_at|string(date-time)|false|read-only| Event creation datetime                                        |
|ssl_cert_verification|body|boolean|false| If true, the SSL certificates for HTTPS requests must be enabled |






