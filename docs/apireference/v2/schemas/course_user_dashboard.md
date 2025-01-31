---
sidebar_label: Course User Dashboard
sidebar_position: 1
title: Course User Dashboard
---

```json
{
  "id": "integer",
  "username": "string",
  "real_name": "string",
  "avatar": "string",
  "join_status": "string",
  "user_completion_rate": "integer",
  "last_active_at": "string",
  "joined_at": "string"
}

```

#### Properties

| Name                 | Type                                                                            | Required | Restrictions | Description                                                                       |                                                                
|----------------------|---------------------------------------------------------------------------------|----------|--------------|-----------------------------------------------------------------------------------|
| id                   | integer                                                                         | false    | read-only    | A unique integer value identifying this user                                      |
| username             | string                                                                          | false    | read-only    | The username of the user. Max 255 characters. Letters, numbers and -/_ characters |
| real_name            | string                                                                          | false    | read-only    | Real name. Max 255 characters                                                     |
| avatar               | string(binary)¦null                                                             | false    | read-only    | The user avatar                                                                   |
| join_status          | [status](/docs/apireference/v2/schemas/course_user_dashboard#enumerated-values) | false    | read-only    | Enum to define the course subscription status of the current user                 |
| user_completion_rate | integer                                                                         | false    | read-only    | Progress completion of the course in percentage for the current user              |
| last_active_at       | string(date-time)                                                               | false    | read-only    | The datetime when the user completed a lesson in the course                       |
| joined_at            | string(date-time)                                                               | false    | read-only    | The datetime when the user joined the course                                      |

#### Enumerated Values

| Property    | Value     | Description                                                                              |
|-------------|-----------|------------------------------------------------------------------------------------------|
| join_status | null      | The user has no status                                                                   |
| join_status | creator   | The user is the creator of the course; the user cannot leave the course or change status |
| join_status | manager   | The user is a manager of the course                                                      |
| join_status | joined    | The user joined the course                                                               |
| join_status | invited   | The user was invited to the course                                                       |
| join_status | requested | The user requests access to the course (available when the course is closed)             |
