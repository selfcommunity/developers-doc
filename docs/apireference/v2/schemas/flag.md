---
sidebar_label: Flag
sidebar_position: 1
title: Flag
---

```json
{
  "user": {},
  "added_at": "string",
  "flag_type": "integer",
  "flag_type_description": "string"
}

```

#### Properties

| Name                  | Type                                                            | Required | Restrictions | Description                                   |
|-----------------------|-----------------------------------------------------------------|----------|--------------|-----------------------------------------------|
| user                  | [User](/docs/apireference/v2/schemas/user)                      | false    | read-only    | The user object                               |
| added_at              | string(date-time)                                               | false    | read-only    | Datetime of flag creation                     |
| flag_type             | [integer](/docs/apireference/v2/schemas/flag#enumerated-values) | true     | none         | The value associated with the flag type       |
| flag_type_description | string                                                          | false    | read-only    | The description associated with the flag type |

#### Enumerated Values

| Parameter | Value | Description |
|-----------|-------|-------------|
| flag_type | 0     | spam        |
| flag_type | 1     | aggressive  |
| flag_type | 2     | vulgar      |
| flag_type | 3     | poor        |
| flag_type | 4     | offtopic    |
