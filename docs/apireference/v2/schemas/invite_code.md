---
sidebar_label: Invite Code
sidebar_position: 1
title: Invite Code
---

```json
{
    "id": "integer",
    "invited_by_username": "string",
    "role": "string",
    "tags": [],
    "name": "string",
    "email": "string",
    "code": "string",
    "generated_at": "string",
    "sent_at": "string",
    "used_at": "string",
    "invited_by": "integer",
    "user": {}
}

```

#### Properties

| Name                | Type                                       | Required | Restrictions | Description                                       |
|---------------------|--------------------------------------------|----------|--------------|---------------------------------------------------|
| id                  | integer                                    | false    | read-only    | Unique integer value identifying this invite code |
| invited_by_username | string                                     | false    | read-only    | The username of the user who sent the invite code |
| role                | string                                     | false    | read-only    | The user role                                     |
| tags                | [Tag](/docs/apireference/v2/schemas/tag)   | false    | read-only    | The list of user tags                             |
| name                | string                                     | false    | read-only    | The name of the person invited                    |
| email               | string                                     | false    | read-only    | The email of the person invited                   |
| code                | string                                     | false    | read-only    | Unique human readable code                        |
| generated_at        | string(datetime)                           | false    | read-only    | Datetime of invite generation                     |
| sent_at             | string(datetime)                           | false    | read-only    | Datetime of invite send                           |
| used_at             | string(datetime)                           | false    | read-only    | Datetime of invite use                            |
| invited_by          | integer                                    | false    | read-only    | The  id of the user who sent the invite code      |   
| user                | [User](/docs/apireference/v2/schemas/user) | false    | read-only    | The user obj                                      |  |