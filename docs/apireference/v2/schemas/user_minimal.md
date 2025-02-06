---
sidebar_label: User Minimal
sidebar_position: 1
title: User Minimal
---

```json
{
  "id": "integer",
  "username": "string",
  "real_name": "string",
  "avatar": "string",
  "community_badge": "boolean",
  "deleted": "boolean"
}

```

#### Properties

| Name            | Type                | Required | Restrictions | Description                                                                       |                                                                
|-----------------|---------------------|----------|--------------|-----------------------------------------------------------------------------------|
| id              | integer             | false    | read-only    | A unique integer value identifying this user                                      |
| username        | string              | false    | read-only    | The username of the user. Max 255 characters. Letters, numbers and -/_ characters |
| real_name       | string              | false    | read-only    | Real name. Max 255 characters                                                     |
| avatar          | string(binary)¦null | false    | read-only    | The user avatar                                                                   |
| community_badge | boolean             | false    | read-only    | Community badge active. Default: False                                            |
| deleted         | boolean             | false    | read-only    | The user account deletion state                                                   |
