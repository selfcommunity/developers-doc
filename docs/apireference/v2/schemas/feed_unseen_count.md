---
sidebar_label: Feed Unseen Count
sidebar_position: 1
title: Feed Unseen Count
---

```json

{
  "count_by_category": [
    {
      "id": "integer",
      "count": "integer"
    }
  ],
  "total": "integer"
}

```

#### Properties

| Name              | Type         | Required | Restrictions | Description                                             |
|-------------------|--------------|----------|--------------|---------------------------------------------------------|
| count_by_category | list(object) | false    | read-only    | Total count of unread feed objects per category         |
| » id              | integer      | true     | read-only    | [Category](/docs/apireference/v2/schemas/category) [id] |
| » count           | integer      | true     | read-only    | Total count of unread feed objects for this category    |
| total             | integer      | true     | read-only    | Total count of unread feed objects                      |
