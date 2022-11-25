---
sidebar_label: Invite Code
sidebar_position: 1
title: Invite Code
---

```json
{
    "id": 1,
    "role": "string",
    "tags": [],
    "name": "string",
    "email": "string",
    "code": "string",
    "generated_at": "2019-12-12T01:00:00+01:00",
    "sent_at": null,
    "used_at": null,
    "invited_by": 1,
    "user": null
}

```

#### Properties

| Name  | Type    | Required | Restrictions | Description                                       |
|-------|---------|----------|--------------|---------------------------------------------------|
| id    | integer | false    | read-only    | Unique integer value identifying this invite code |
| code  | string  | false    | read-only    | Unique human readable code                        |
| name  | string  | false    | read-only    | The name of the person invited                    |
| email | string  | false    | read-only    | The email of the person invited                   |