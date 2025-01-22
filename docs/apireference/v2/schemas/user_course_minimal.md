---
sidebar_label: User Course Minimal
sidebar_position: 1
title: User Course Minimal
---

```json
{
  "id": "integer",
  "username": "string",
  "real_name": "string",
  "avatar": "string"
}

```

#### Properties

| Name      | Type                | Required | Restrictions | Description                                                                       |                                                                
|-----------|---------------------|----------|--------------|-----------------------------------------------------------------------------------|
| id        | integer             | false    | read-only    | A unique integer value identifying this user                                      |
| username  | string              | false    | read-only    | The username of the user. Max 255 characters. Letters, numbers and -/_ characters |
| real_name | string              | false    | read-only    | Real name. Max 255 characters                                                     |
| avatar    | string(binary)¦null | false    | read-only    | The user avatar                                                                   |
