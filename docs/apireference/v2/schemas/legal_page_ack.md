---
sidebar_label: Legal Page Ack
sidebar_position: 1
title: Legal Page Ack
---

```json
{
  "id": "integer",
  "accepted_at": "string",
  "not_accepted_at": "string",
  "custom_page": "integer",
  "user": "integer"
}
```

#### Properties

| Name            | Type                   | Required | Restrictions | Description                                    |
|-----------------|------------------------|----------|--------------|------------------------------------------------|
| id              | integer                | false    | read-only    | A unique integer value identifying this ack    |
| accepted_at     | string(date-time)¦null | false    | none         | This policy has been accepted in this datetime |
| not_accepted_at | string(date-time)¦null | false    | none         | This policy has been refused in this datetime  |
| custom_page     | integer                | true     | none         | The id of the custom page (legal page)         |
| user            | integer                | true     | none         | The id of the user                             |