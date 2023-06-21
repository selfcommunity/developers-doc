---
sidebar_label: Attempt
sidebar_position: 1
title: Attempt
---

```json
{
  "id": "integer",
  "created_at": "string",
  "event": {
    "type": "string",
    "added_at": "string"
  },
  "sent_at": "string",
  "http_request_body": "string",
  "http_request_signature_header": "string",
  "http_response_code": "integer",
  "http_response_body": "string",
  "next_retry": "string"
}

```

#### Properties

| Name                          | Type              | Required | Restrictions | Description                    |
|-------------------------------|-------------------|----------|--------------|--------------------------------|
| id                            | integer           | false    | read-only    | A unique integer value         |
| created_at                    | string(date-time) | false    | read-only    | The creation datetime          |
| event                         | list              | true     | none         | The event                      |
| » type                        | string            | true     | none         | The event type                 |
| » added_at                    | string(date-time) | false    | read-only    | The datetime of event creation |
| sent_at                       | string(date-time) | false    | read-only    | Datetime of sent               |
| http_request_body             | string            | false    | read-only    | Http request body              |
| http_request_signature_header | string            | false    | read-only    | Http request signature header  |
| http_response_code            | integer           | false    | read-only    | Http response code             |
| http_response_body            | string            | false    | read-only    | Http response body             |
| next_retry                    | string(date-time) | false    | read-only    | Datetime of next retry         |