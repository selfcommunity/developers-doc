---
sidebar_label: Custom Notification
sidebar_position: 1
title: Custom Notification
---

```json
{
  "id": "integer",
  "recipients_type": "string",
  "type": "string",
  "embed": {
    "id": "integer",
    "embed_type": "string",
    "embed_id": "string",
    "url": "string(uri)",
    "metadata": "{}"
  },
  "title": "string",
  "description": "string"
}

```

#### Properties

| Name            | Type                                                                          | Required | Restrictions | Description                                                 |
|-----------------|-------------------------------------------------------------------------------|----------|--------------|-------------------------------------------------------------|
| id              | integer                                                                       | false    | read-only    | A unique integer value identifying this custom notification |
| recipients_type | [string](/docs/apireference/v2/schemas/custom_notification#enumerated-values) | false    | none         | Can be 'connections' or 'user' (default is 'conections')    |
| type            | string                                                                        | true     | none         | An optional custom string to differentiate notifications    |
| embed           | [Embed](/docs/apireference/v2/schemas/embed)                                  | false    | none         | Embed object if exist                                       |
| title           | string¦null                                                                   | false    | none         | Notification title                                          |
| description     | string¦null                                                                   | false    | none         | Notification description                                    |

#### Enumerated Values

| Property        | Value       | Description                                                             |
|-----------------|-------------|-------------------------------------------------------------------------|
| recipients_type | connections | The recipients of the notification will be the user's friends/followers |
| recipients_type | user        | The recipients of the notification will be the user himself             |