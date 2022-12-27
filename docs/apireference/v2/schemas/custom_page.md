---
sidebar_label: Custom Page
sidebar_position: 1
title: Custom Page
---

```json
{
  "id": "integer",
  "slug": "string",
  "label": "string",
  "title": "string",
  "alternative_url": "string",
  "html_body": "string",
  "visible_in_menu": "boolean",
  "order": "integer",
  "created_at": "string",
  "updated_at": "string",
  "active": "boolean",
  "created_by": "integer",
  "updated_by": "integer"
}

```

#### Properties

| Name            | Type              | Required | Restrictions | Description                                                                       |
|-----------------|-------------------|----------|--------------|-----------------------------------------------------------------------------------|
| id              | integer           | false    | read-only    | A unique integer value identifying this page                                      |
| slug            | string            | false    | none         | The url slug                                                                      |
| label           | string            | true     | none         | A label for the link in the menu                                                  |
| title           | string            | true     | none         | The title of this page                                                            |
| alternative_url | string            | false    | none         | An url usable in alternative to the full body of the page (typically for the menu) |
| html_body       | string¦null       | false    | none         | The html body pf the page                                                         |
| visible_in_menu | boolean           | false    | none         | If true, this page is visible in menu                                             |
| order           | integer           | false    | none         | The extraction order of the page                                                  |
| created_at      | string(date-time) | false    | none         | Datetime of creation                                                              |
| updated_at      | string(date-time) | false    | none         | Last modify datetime                                                              |
| active          | boolean           | false    | none         | If true, this page is active                                                      |
| created_by      | integer           | true     | none         | The id of the creator of this page                                                |
| updated_by      | integer           | true     | none         | The id of the user who updated this page                                          |
