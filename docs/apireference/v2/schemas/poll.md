---
sidebar_label: Poll 
sidebar_position: 1
title: Poll 
---

```json
{
  "id": "integer",
  "title": "string",
  "multiple_choices": "boolean",
  "added_at": "string",
  "modified_at": "string",
  "closed": "boolean",
  "expiration_at": "string",
  "hidden": "boolean",
  "choices": [
    {
      "id": "integer",
      "choice": "string",
      "order": "integer",
      "added_at": "2string",
      "deleted": "boolean",
      "vote_count": "integer",
      "voted": "boolean"
    },
    {
      "id": "integer",
      "choice": "string",
      "order": "integer",
      "added_at": "2string",
      "deleted": "boolean",
      "vote_count": "integer",
      "voted": "boolean"
    }
    ]
}

```

#### Properties

| Name             | Type              | Required | Restrictions | Description                                |
|------------------|-------------------|----------|--------------|--------------------------------------------|
| id               | integer           | false    | read-only    | The poll id                                |
| title            | string            | true     | none         | Poll title                                 |
| multiple_choices | boolean           | false    | none         | If true, poll has multiple choices votable |
| added_at         | string(date-time) | false    | read-only    | Datetime of poll creation                  |
| modified_at      | string(date-time) | false    | read-only    | Datetime of poll last edit                 |
| closed           | boolean           | false    | none         | If true, poll is closed                    |
| expiration_at    | string(date-time) | false    | none         | Poll expiration datetime                   |
| hidden           | string            | false    | read-only    | If true, poll is hidden                    |
| choices          | list(object)      | true     | none         | Poll choices                               |
| » id             | integer           | false    | read-only    | Poll choice id                             |
| » choice         | string            | true     | none         | Poll choice description                    |
| » order          | integer           | false    | read-only    | The order                                  |
| » added_at       | string(date-time) | false    | read-only    | Poll choice creation time                  |
| » deleted        | boolean           | false    | read-only    | If true, choice has been deleted           |
| » vote_count     | integer           | false    | read-only    | Poll choice votes number                   |
| » voted          | boolean           |          |              | If true, poll choice has been voted        |
