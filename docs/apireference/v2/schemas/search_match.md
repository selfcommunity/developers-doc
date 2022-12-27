---
sidebar_label: Search Match
sidebar_position: 1
title: Search Match
---

```json
{
    "object": {
      "id": "integer",
      "type": "string",
      "added_at": "string",
      "html": "string"
    },
    "author": {
      "id": "integer",
      "username": "string",
      "real_name": "string",
      "email": "string",
      "email_isvalid": "boolean",
      "date_joined": "string",
      "bio": "string",
      "location": "string",
      "birthday": "string",
      "description": "string",
      "gender": "string",
      "status": "string",
      "website": "string",
      "avatar": "string",
      "cover": "string"
    }
}

```

#### Properties

| Name       | Type                                       | Required | Restrictions | Description                                                                                                                                                                  |
|------------|--------------------------------------------|----------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| object     | object                                     | false    | none         | General reference for [Discussion](/docs/apireference/v2/schemas/discussion), [Post](/docs/apireference/v2/schemas/post) or [Comment](/docs/apireference/v2/schemas/comment) |
| » id       | integer                                    | false    | read-only    | Object id                                                                                                                                                                    |
| » type     | [string](/docs/apireference/v2/schemas/search_match#enumerated-values)                                 | false    | read-only    | Type of the object                                                                                                                                                           |
| » added_at | string(date-time)                          | false    | read-only    | Datetime of creation                                                                                                                                                         |
| » html     | string                                     | false    | read-only    | The content of the object in html format, it contains the match of the search wrapped into `<b>` tag                                                                         |
| author     | [User](/docs/apireference/v2/schemas/user) | false    | read-only    | The user object                                                                                                                                                              |

#### Enumerated Values

| Property | Value      | Description                                                              |
|----------|------------|--------------------------------------------------------------------------|
| type     | discussion | Identify a [Discussion](/docs/apireference/v2/schemas/discussion) object |
| type     | post       | Identify a [Post](/docs/apireference/v2/schemas/post) object             |
| type     | comment    | Identify a [Comment](/docs/apireference/v2/schemas/comment) object       |
