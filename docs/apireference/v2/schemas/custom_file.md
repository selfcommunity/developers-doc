---
sidebar_label: Custom File
sidebar_position: 1
title: Custom File
---

```json
{
  "id": "integer",
  "custom_file": "string(uri)",
  "created_at": "string(date-time)",
  "lastmod_datetime": "string(date-time)",
  "created_by": "integer"
}

```

#### Properties

| Name             | Type                   | Description                                         |
|------------------|------------------------|-----------------------------------------------------|
| id               | integer                | A unique integer value identifying this custom file |
| custom_file      | string(uri)            | The file uri                                        |
| created_at       | string(date-time)      | Datetime of creation                                |
| lastmod_datetime | string(date-time)¦null | Last modify datetime                                |
| created_by       | integer                | The id of the creator of this custom file           |


