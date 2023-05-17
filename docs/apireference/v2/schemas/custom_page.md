---
sidebar_label: Custom Page
sidebar_position: 1
title: Custom Page
---

```json
{
  "id": "integer",
  "type": "normal",
  "slug": "string",
  "title": "string",
  "html_summary": "string",
  "html_body": "string", 
  "valid_from": "string(date-time)",
  "valid_to": "string(date-time)",
  "created_at": "string(date-time)",
  "updated_at": "string(date-time)",
  "active": "boolean",
  "created_by": "integer",
  "updated_by": "integer"
}

```

#### Properties

| Name         | Type                   | Description                                  |
|--------------|------------------------|----------------------------------------------|
| id           | integer                | A unique integer value identifying this page |
| type         | string                 | Fixed value is "normal"                      |
| slug         | string                 | The slug                                     |
| title        | string                 | The title of this page                       |
| html_summary | string¦null            | The html summary of the page                 |
| html_body    | string¦null            | The html body of the page                    |
| valid_from   | string(date-time)¦null | Valid from this datetime                     |
| valid_to     | string(date-time)¦null | Valid till this datetime                     |
| created_at   | string(date-time)      | Datetime of creation                         |
| updated_at   | string(date-time)¦null | Last modify datetime                         |
| active       | boolean                | If true, this page is active                 |
| created_by   | integer                | The id of the creator of this page           |
| updated_by   | integer¦null           | The id of the user who updated this page     |
