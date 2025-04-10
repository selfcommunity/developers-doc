---
sidebar_label: Course User Detail
sidebar_position: 1
title: Course User Detail
---

```json
{
  "id": "integer",
  "name": "string",
  "slug": "string",
  "description": "string",
  "type": "string",
  "privacy": "string",
  "enforce_lessons_order": "boolean",
  "new_comment_notification_enabled": "boolean",
  "hide_member_count": "boolean",
  "meta_title": "string",
  "meta_description": "string",
  "og_title": "string",
  "og_description": "string",
  "og_image": "string",
  "sections_order": [],
  "image_bigger": "string",
  "image_big": "string",
  "image_medium": "string",
  "image_small": "string",
  "deleted": "boolean",
  "join_status": "string",
  "created_at": "string",
  "created_by": {},
  "categories": [],
  "sections": [],
  "num_lessons": "integer",
  "num_sections": "integer",
  "num_lessons_completed": "integer",
  "user_completion_rate": "integer"
}

```

#### Properties

| Name                             | Type                                                                                         | Required | Restrictions | Description                                                                                                                                                                          |
|----------------------------------|----------------------------------------------------------------------------------------------|----------|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                               | integer                                                                                      | false    | read-only    | Unique integer value identifying this course                                                                                                                                         |                                                                         |
| name                             | string                                                                                       | true     | read-only    | Unique name of the course                                                                                                                                                            |
| slug                             | string                                                                                       | false    | read-only    | Unique slug identifying this course in a URL                                                                                                                                         |
| description                      | string                                                                                       | false    | read-only    | The course description (default value: empty string)                                                                                                                                 |
| type                             | [type](/docs/apireference/v2/schemas/course#enumerated-values)                               | true     | read-only    | Enum to define the course type                                                                                                                                                       |
| privacy                          | [privacy](/docs/apireference/v2/schemas/course#enumerated-values)                            | false    | read-only    | Enum to define the course privacy (default value: empty string)                                                                                                                      |
| enforce_lessons_order            | boolean                                                                                      | false    | read-only    | Lesson order enforcement (default: false).<br/>Your members will have to complete each lesson in order before moving onto the next one                                               |
| new_comment_notification_enabled | boolean                                                                                      | false    | read-only    | Notify course admins about new lesson comments (default: true).<br/>If enabled, admins and moderators will receive a new comment notification anytime members leave a lesson comment |
| hide_member_count                | boolean                                                                                      | false    | read-only    | Hide member count (default: false).<br/>If enabled, only managers can see the member count                                                                                           |
| meta_title                       | string                                                                                       | false    | read-only    | The course meta title                                                                                                                                                                |
| meta_description                 | string                                                                                       | false    | read-only    | The course meta description                                                                                                                                                          |
| og_title                         | string                                                                                       | false    | read-only    | The course Open Graph title                                                                                                                                                          |
| og_description                   | string                                                                                       | false    | read-only    | The course Open Graph description                                                                                                                                                    |
| og_image                         | string                                                                                       | false    | read-only    | The course Open Graph image                                                                                                                                                          |
| sections_order                   | list(integer)                                                                                | false    | read-only    | List of all section IDs belonging to the current course; IDs are sorted based on the choice made by the course managers                                                              |
| image_bigger                     | string                                                                                       | false    | read-only    | Squared image - auto generated bigger size                                                                                                                                           |
| image_big                        | string                                                                                       | false    | read-only    | Squared image - auto generated big size                                                                                                                                              |
| image_medium                     | string                                                                                       | false    | read-only    | Squared image - auto generated medium size                                                                                                                                           |
| image_small                      | string                                                                                       | false    | read-only    | Squared image - auto generated small size                                                                                                                                            |
| deleted                          | boolean                                                                                      | false    | read-only    | Define if this course is deleted                                                                                                                                                     |
| join_status                      | [status](/docs/apireference/v2/schemas/course#enumerated-values)                             | false    | read-only    | Enum to define the course subscription status of the current user                                                                                                                    |
| created_at                       | string(date-time)                                                                            | false    | read-only    | Datetime of course creation                                                                                                                                                          |
| created_by                       | [User Minimal](/docs/apireference/v2/schemas/user_minimal)                                   | false    | read-only    | The course creator                                                                                                                                                                   |
| categories                       | list([Category](/docs/apireference/v2/schemas/category))                                     | false    | read-only    | The categories associated to the course                                                                                                                                              |
| sections                         | list([Course User Section Detail](/docs/apireference/v2/schemas/course_user_section_detail)) | false    | read-only    | The sections associated to the course (with counters)                                                                                                                                |
| num_lessons                      | integer                                                                                      | false    | read-only    | Total number of published lessons of the course                                                                                                                                      |                                                                         |
| num_sections                     | integer                                                                                      | false    | read-only    | Total number of sections with at least one lesson                                                                                                                                    |                                                                         |
| num_lessons_completed            | integer                                                                                      | false    | read-only    | Number of lessons completed by the user                                                                                                                                              |                                                                         |
| user_completion_rate             | integer                                                                                      | false    | read-only    | User completion rate of the course (percentage)                                                                                                                                      |                                                                         |

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
| join_status | creator    | The user is the creator of the course; the user cannot leave the course or change status                                                                                     |
| join_status | manager    | The user is a manager of the course                                                                                                                                          |
| join_status | joined     | The user joined the course                                                                                                                                                   |
| join_status | invited    | The user was invited to the course                                                                                                                                           |
| join_status | requested  | The user requests access to the course (available when the course is closed)                                                                                                 |
