---
sidebar_label: Vote
sidebar_position: 1
title: Vote
---

```json
{
  "user": {
    User
  },
  "reaction": {
    Reaction
  },
  "voted_at": "string(date-time)"
}

```

#### Properties

| Name     | Type                                               | Required | Restrictions | Description         |
|----------|----------------------------------------------------|----------|--------------|---------------------|
| user     | [User](/docs/apireference/v2/schemas/user)         | false    | read-only    | The user object     |
| reaction | [Reaction](/docs/apireference/v2/schemas/reaction) | false    | read-only    | The reaction object |
| voted_at | string(date-time)                                  | false    | read-only    | Datetime of vote    |


