---
sidebar_label: Attempt
sidebar_position: 1
title: Attempt
---

```json
{
  "id": 0,
  "created_at": "2019-08-24T14:15:22Z",
  "event": {
    "type": "comment.created",
    "added_at": "2019-08-24T14:15:22Z"
  },
  "sent_at": "2019-08-24T14:15:22Z",
  "http_request_body": "string",
  "http_request_signature_header": "string",
  "http_response_code": 0,
  "http_response_body": "string",
  "next_retry": "2019-08-24T14:15:22Z"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|created_at|string(date-time)|false|read-only|none|
|event|list|true|none|none|
|» type|string|true|none|none|
|» added_at|string(date-time)|false|read-only|none|
|sent_at|string(date-time)|false|read-only|none|
|http_request_body|string|false|read-only|none|
|http_request_signature_header|string|false|read-only|none|
|http_response_code|integer|false|read-only|none|
|http_response_body|string|false|read-only|none|
|next_retry|string(date-time)|false|read-only|none|