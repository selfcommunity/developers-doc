---
sidebar_label: Course Section
sidebar_position: 1
title: Course Section
---

```json
{
  "id": "integer",
  "name": "string",
  "dripped_at": "string",
  "drip_delay": "integer",
  "lessons_order": []
}

```

#### Properties

| Name          | Type              | Required | Restrictions | Description                                                                                                                                                                                                                                                                 |
|---------------|-------------------|----------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id            | integer           | false    | read-only    | Unique integer value identifying this section course                                                                                                                                                                                                                        |                                                                         |
| name          | string            | true     | none         | Name of the section course                                                                                                                                                                                                                                                  |
| dripped_at    | string(date-time) | false    | none         | Sections are dripped relative to this date; used only id course type is [scheduled](/docs/apireference/v2/schemas/course#enumerated-values)                                                                                                                                 |
| drip_delay    | integer           | false    | none         | Sections are dripped relative to the enrollment date of the current user; used only if course type is [structured](/docs/apireference/v2/schemas/course#enumerated-values) .<br/>Default: 0 days; it means the section will be immediately available after joining a course |                                                                         |
| lessons_order | list(integer)     | false    | none         | List of all lesson IDs belonging to the current section course; IDs are sorted based on the choice made by the course managers                                                                                                                                              |
