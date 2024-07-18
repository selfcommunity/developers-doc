---
sidebar_label: User Preferences
sidebar_position: 1
title: User Preferences
---

```json
{
  "id": "integer",
  "user_id": "integer",
  "key": "string",
  "value": "json",
  "created_at": "string",
  "last_updated_at": "string"
}

```

#### Properties

| Name            | Type              | Required | Restrictions | Description                         |
|-----------------|-------------------|----------|--------------|-------------------------------------|
| id              | integer           | false    | read-only    | id of the preference                |
| user_id         | integer           | false    | read-only    | id of the user                      |
| key             | string            | true     | none         | key of the preference               |
| value           | json              | true     | none         | value of the preference             |
| created_at      | string(date-time) | false    | read-only    | when the preference is created      |
| last_updated_at | string(date-time) | false    | read-only    | when the preference is last updated |
