---
sidebar_label: Course Section Detail
sidebar_position: 1
title: Course Section Detail
---

```json
{
  "id": "integer",
  "name": "string",
  "dripped_at": "string",
  "drip_delay": "integer",
  "lessons_order": [],
  "lessons": []
}

```

#### Properties

| Name          | Type                                                                             | Required | Restrictions | Description                                                                                                                                                                                                                                                                 |
|---------------|----------------------------------------------------------------------------------|----------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id            | integer                                                                          | false    | read-only    | Unique integer value identifying this section course                                                                                                                                                                                                                        |                                                                         |
| name          | string                                                                           | true     | read-only    | Name of the section course                                                                                                                                                                                                                                                  |
| dripped_at    | string(date-time)                                                                | false    | read-only    | Sections are dripped relative to this date; used only id course type is [scheduled](/docs/apireference/v2/schemas/course#enumerated-values)                                                                                                                                 |
| drip_delay    | integer                                                                          | false    | read-only    | Sections are dripped relative to the enrollment date of the current user; used only if course type is [structured](/docs/apireference/v2/schemas/course#enumerated-values) .<br/>Default: 0 days; it means the section will be immediately available after joining a course |                                                                         |
| lessons_order | list(integer)                                                                    | false    | read-only    | List of all lesson IDs belonging to the current section course; IDs are sorted based on the choice made by the course managers                                                                                                                                              |
| lessons       | list([Course Lesson Detail](/docs/apireference/v2/schemas/course_lesson_detail)) | false    | read-only    | The lessons associated to the course section                                                                                                                                                                                                                                |
