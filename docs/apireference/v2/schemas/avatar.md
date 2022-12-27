---
sidebar_label: Avatar
sidebar_position: 1
title: Avatar
---

```json
{
    "id": "integer",
    "primary": "boolean",
    "avatar": "string(uri)",
    "date_uploaded": "string",
    "user": "integer"
}

```

#### Properties

| Name          | Type                | Description                                    |
|---------------|---------------------|------------------------------------------------|
| id            | integer             | A unique integer value identifying this avatar |
| primary       | boolean             | If true, it is the user primary avatar         |
| avatar        | string(binary)¦null | The avatar url                                 |
| date_uploaded | string(date-time)   | Upload datetime                                |
| user          | integer             | The user id for this avatar                    |

