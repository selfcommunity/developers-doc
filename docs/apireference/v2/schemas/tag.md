---
sidebar_label: Tag
sidebar_position: 1
title: Tag
---

```json
{
  "id": "integer",
  "active": "boolean",
  "name": "string",
  "type": "string",
  "description": "string",
  "color": "string",
  "visible": "boolean",
  "visibility_boost": "boolean",
  "created_at": "string",
  "deleted": "boolean"
}

```

#### Properties

| Name             | Type                                                  | Required | Restrictions | Description                                |
|------------------|-------------------------------------------------------|----------|--------------|--------------------------------------------|
| id               | integer                                               | false    | read-only    | A unique integer value identifying this tag |
| type             | [string](/docs/apireference/v2/schemas/tag#tag-types) | true     | none         | The type of the tag (unique together name) |
| name             | string                                                | true     | none         | The name of the tag (unique together type) |
| description      | string¦null                                           | false    | none         | Short description of the tag               |
| color            | string                                                | false    | none         | Hexadecimal format color code with #       |
| visible          | boolean                                               | false    | none         | If true, this tag is publicly visible      |
| visibility_boost | boolean                                               | false    | none         | The tag add a visibility boost             |
| created_at       | string(date-time)                                     | false    | read-only    | Creation date time                         |
| active           | boolean                                               | false    | none         | If true, this tag is active                |
| deleted          | boolean                                               | false    | none         | If true, this tag has been deleted         |

#### Tag types
| Property | Value    | Description       |
|----------|----------|-------------------|
| type     | user     | Only for user     |
| type     | category | Only for category |
