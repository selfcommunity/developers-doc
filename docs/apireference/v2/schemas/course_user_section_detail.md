---
sidebar_label: Course User Section Detail
sidebar_position: 1
title: Course User Section Detail
---

```json
{
  "id": "integer",
  "name": "string",
  "dripped_at": "string",
  "drip_delay": "integer",
  "lessons_order": [],
  "available_date": "string",
  "locked": "boolean",
  "num_lessons": "integer",
  "num_lessons_completed": "integer",
  "lessons": []
}

```

#### Properties

| Name                  | Type                                                                                       | Required | Restrictions | Description                                                                                                                                                                                                                                                                 |
|-----------------------|--------------------------------------------------------------------------------------------|----------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                    | integer                                                                                    | false    | read-only    | Unique integer value identifying this section course                                                                                                                                                                                                                        |                                                                         |
| name                  | string                                                                                     | true     | read-only    | Name of the section course                                                                                                                                                                                                                                                  |
| dripped_at            | string(date-time)                                                                          | false    | read-only    | Sections are dripped relative to this date; used only if course type is [scheduled](/docs/apireference/v2/schemas/course#enumerated-values)                                                                                                                                 |
| drip_delay            | integer                                                                                    | false    | read-only    | Sections are dripped relative to the enrollment date of the current user; used only if course type is [structured](/docs/apireference/v2/schemas/course#enumerated-values) .<br/>Default: 0 days; it means the section will be immediately available after joining a course |                                                                         |
| lessons_order         | list(integer)                                                                              | false    | read-only    | List of all lesson IDs belonging to the current section course; IDs are sorted based on the choice made by the course managers                                                                                                                                              |
| available_date        | string(date-time)¦null                                                                     | false    | read-only    | Determines when the current section will be available for the user; the value will be `null` if the course type is `self-paced`                                                                                                                                             |                                                                         |
| locked                | boolean                                                                                    | false    | read-only    | Determines whether the current section is locked for the user based on the section availability strategy; the value will not be considered if the course type is `self-paced`                                                                                               |                                                                         |
| num_lessons           | integer                                                                                    | false    | read-only    | Total number of published lessons of the current course section                                                                                                                                                                                                             |                                                                         |
| num_lessons_completed | integer                                                                                    | false    | read-only    | Number of lessons completed by the user in the current course section                                                                                                                                                                                                       |                                                                         |
| lessons               | list([Course User Lesson Detail](/docs/apireference/v2/schemas/course_user_lesson_detail)) | false    | read-only    | The lessons associated to the course section                                                                                                                                                                                                                                |
