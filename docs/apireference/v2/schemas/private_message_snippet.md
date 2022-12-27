---
sidebar_label: Private Message Snippet
sidebar_position: 1
title: Private Message Snippet
---

```json

{
  "id": "integer",
  "headline": "string",
  "sender": {},
  "receiver": {},
  "created_at": "string",
  "last_message_at": "string",
  "thread_status": "string"
}

```

#### Properties

| Name            | Type                                       | Required | Restrictions | Description                                     |
|-----------------|--------------------------------------------|----------|--------------|-------------------------------------------------|
| id              | integer                                    | false    | read-only    | A unique integer value identifying this snippet |
| headline        | string                                     | false    | none         | The headline/snippet                            |
| sender          | [User](/docs/apireference/v2/schemas/user) | false    | none         | The snippet sender/creator                      |
| receiver        | [User](/docs/apireference/v2/schemas/user) | false    | none         | The snippet receiver                            |
| created_at      | string(date-time)                          | false    | none         | Datetime of creation                            |
| last_message_at | string(date-time)                          | false    | none         | Datetime of last message                        |
| thread_status   | string                                     | false    | none         | Snippet status: seen or new                     |