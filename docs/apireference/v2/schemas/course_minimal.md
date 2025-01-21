---
sidebar_label: Course Minimal
sidebar_position: 1
title: Course Minimal
---

```json
{
  "id": "integer",
  "name": "string",
  "slug": "string",
  "type": "string",
  "privacy": "string",
  "image_bigger": "string",
  "image_big": "string",
  "image_medium": "string",
  "image_small": "string",
  "join_status": "string",
  "user_completion_rate": "integer",
  "created_at": "string",
  "created_by": {},
  "categories": []
}

```

#### Properties

| Name                 | Type                                                              | Required | Restrictions | Description                                                          |
|----------------------|-------------------------------------------------------------------|----------|--------------|----------------------------------------------------------------------|
| id                   | integer                                                           | false    | read-only    | Unique integer value identifying this course                         |                                                                         |
| name                 | string                                                            | true     | none         | Unique name of the course                                            |
| slug                 | string                                                            | false    | none         | Unique slug identifying this course in a URL                         |
| type                 | [type](/docs/apireference/v2/schemas/course#enumerated-values)    | true     | none         | Enum to define the course type                                       |
| privacy              | [privacy](/docs/apireference/v2/schemas/course#enumerated-values) | false    | none         | Enum to define the course privacy (default value: empty string)      |
| image_bigger         | string                                                            | false    | read-only    | Squared image - auto generated bigger size                           |
| image_big            | string                                                            | false    | read-only    | Squared image - auto generated big size                              |
| image_medium         | string                                                            | false    | read-only    | Squared image - auto generated medium size                           |
| image_small          | string                                                            | false    | read-only    | Squared image - auto generated small size                            |
| join_status          | [status](/docs/apireference/v2/schemas/course#enumerated-values)  | false    | read-only    | Enum to define the course subscription status of the current user    |
| user_completion_rate | integer                                                           | false    | read-only    | Progress completion of the course in percentage for the current user |
| created_at           | string(date-time)                                                 | false    | read-only    | Datetime of course creation                                          |
| created_by           | [User](/docs/apireference/v2/schemas/user)                        | false    | read-only    | The course creator                                                   |
| categories           | list([Category](/docs/apireference/v2/schemas/category))          | false    | none         | The categories associated to the course                              |

#### Enumerated Values

| Property    | Value      | Description                                                                                                                                                                  |
|-------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type        | self-paced | Course starts when a member enrolls. All contents are available immediately                                                                                                  |
| type        | structured | Course starts when a member enrolls. Sections are dripped relative to their enrollment date                                                                                  |
| type        | scheduled  | Course starts on a specific date. Sections are dripped relative to that date                                                                                                 |
| privacy     |            | Unselected privacy status (aka draft); cannot revert to this status after selecting another privacy status                                                                   |
| privacy     | open       | Access: Open. Anyone in your community can see and join this course.<br/>Visibility: Visible to all members of your community                                                |
| privacy     | private    | Access: Closed. Only members who are added by you will be able to access this course.<br/>Visibility: Invited members only. Non-members will see the lock screen             |
| privacy     | secret     | Access: Closed. Only members who are added by you will be able to access this course.<br/>Visibility: Invited members only. Non-members will not see that this course exists |
| join_status | null       | The user has no status                                                                                                                                                       |
| join_status | joined     | The user joined the course                                                                                                                                                   |
| join_status | invited    | The user was invited to the course                                                                                                                                           |
| join_status | requested  | The user requests access to the course (available when the course is closed)                                                                                                 |
| join_status | manager    | The user is a manager of the course and of course the user joined the course                                                                                                 |
