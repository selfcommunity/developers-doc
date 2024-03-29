---
sidebar_label: Private Message
sidebar_position: 1
title: Private Message
---

```json

{
  "id": "integer",
  "sender": {},
  "message": "string",
  "created_at": "string",
  "status": "string",
  "file": {},
  "thread_id": "integer"
}

```

#### Properties

| Name       | Type                                       | Required | Restrictions | Description                                             |
|------------|--------------------------------------------|----------|--------------|---------------------------------------------------------|
| id         | integer                                    | false    | read-only    | A unique integer value identifying this private message |
| sender     | [User](/docs/apireference/v2/schemas/user) | false    | read-only    | The message sender/creator                              |
| message    | string                                     | true     | none         | Text message                                            |
| created_at | string(date-time)                          | false    | read-only    | Send date time                                          |
| status     | string                                     | true     | none         | Message status: created, deleted or hidden message      |
| file       | [File](/docs/apireference/v2/schemas/file) | true     | none         | The private message file                                |
| thread_id  | integer                                    | false    | read-only    | A unique integer value identifying the thread id        |