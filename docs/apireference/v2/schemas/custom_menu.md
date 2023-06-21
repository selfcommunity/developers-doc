---
sidebar_label: Custom Menu
sidebar_position: 1
title: Custom Menu
---

```json
{
  "id": "integer",
  "name": "string",
  "items": [
    {
      "id": "integer",
      "custom_menu": "integer",
      "label": "string",
      "url": "string(uri)",
      "attrs": "string",
      "order": "integer"
    }
  ],
  "created_at": "string(date-time)",
  "updated_at": "string(date-time)"
}

```

#### Properties

| Name       | Type              | Description                                                        |
|------------|-------------------|--------------------------------------------------------------------|
| id         | integer           | A unique integer value identifying this menu                       |
| name       | string            | A unique string identifying this menu ('base' is the default menu) |
| items      | list              | List of items of the menu ordered by order                         |
| created_at | string(date-time) | Datetime of creation                                               |
| updated_at | string(date-time) | Last modify datetime                                               |

#### Item Properties

| Name        | Type        | Description                                             |
|-------------|-------------|---------------------------------------------------------|
| id          | integer     | A unique integer value identifying this menu item       |
| custom_menu | integer     | A unique integer value identifying the parent menu      |
| label       | string      | Label (eg: the text content of an hyperlink)            |
| url         | string(uri) | Uri (eg: the url of an hyperlink)                       |
| attrs       | string      | Other attributes (eg: title and target of an hyperlink) |
| order       | integer     | Order of the item relative to the parent menu           |