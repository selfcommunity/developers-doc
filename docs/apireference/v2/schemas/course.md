---
sidebar_label: Course
sidebar_position: 1
title: Course
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
  "image_original": "string",
  "image_bigger": "string",
  "image_big": "string",
  "image_medium": "string",
  "image_small": "string",
  "deleted": "boolean",
  "join_status": "string",
  "user_completion_rate": "integer",
  "created_at": "string",
  "created_by": {},
  "categories": []
}

```

#### Properties

| Name                             | Type                                                              | Required | Restrictions | Description                                                                                                                                                                          |
|----------------------------------|-------------------------------------------------------------------|----------|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                               | integer                                                           | false    | read-only    | Unique integer value identifying this course                                                                                                                                         |                                                                         |
| name                             | string                                                            | true     | none         | Unique name of the course                                                                                                                                                            |
| slug                             | string                                                            | false    | none         | Unique slug identifying this course in a URL; it will be generated from the name if not specified. Can be changed later                                                              |
| description                      | string                                                            | false    | none         | The course description (default value: empty string)                                                                                                                                 |
| type                             | [type](/docs/apireference/v2/schemas/course#enumerated-values)    | true     | none         | Enum to define the course type                                                                                                                                                       |
| privacy                          | [privacy](/docs/apireference/v2/schemas/course#enumerated-values) | false    | none         | Enum to define the course privacy (default value: empty string); cannot revert privacy to the empty string with an update                                                            |
| enforce_lessons_order            | boolean                                                           | false    | none         | Lesson order enforcement (default: false).<br/>Your members will have to complete each lesson in order before moving onto the next one                                               |
| new_comment_notification_enabled | boolean                                                           | false    | none         | Notify course admins about new lesson comments (default: true).<br/>If enabled, admins and moderators will receive a new comment notification anytime members leave a lesson comment |
| hide_member_count                | boolean                                                           | false    | none         | Hide member count (default: false).<br/>If enabled, only managers can see the member count                                                                                           |
| meta_title                       | string                                                            | false    | none         | The course meta title                                                                                                                                                                |
| meta_description                 | string                                                            | false    | none         | The course meta description                                                                                                                                                          |
| og_title                         | string                                                            | false    | none         | The course Open Graph title                                                                                                                                                          |
| og_description                   | string                                                            | false    | none         | The course Open Graph description                                                                                                                                                    |
| og_image                         | string                                                            | false    | none         | The course Open Graph image                                                                                                                                                          |
| sections_order                   | list(integer)                                                     | false    | none         | List of all section IDs belonging to the current course; IDs are sorted based on the choice made by the course managers                                                              |
| image_original                   | string                                                            | false    | write-only   | The course profile image uploaded during course creation. Only for [Create Course](/docs/apireference/v2/course/create_a_course) request body and update                             |
| image_bigger                     | string                                                            | false    | read-only    | Squared image - auto generated bigger size                                                                                                                                           |
| image_big                        | string                                                            | false    | read-only    | Squared image - auto generated big size                                                                                                                                              |
| image_medium                     | string                                                            | false    | read-only    | Squared image - auto generated medium size                                                                                                                                           |
| image_small                      | string                                                            | false    | read-only    | Squared image - auto generated small size                                                                                                                                            |
| deleted                          | boolean                                                           | false    | read-only    | Define if this course is deleted                                                                                                                                                     |
| join_status                      | [status](/docs/apireference/v2/schemas/course#enumerated-values)  | false    | read-only    | Enum to define the course subscription status of the current user                                                                                                                    |
| user_completion_rate             | integer                                                           | false    | read-only    | Progress completion of the course in percentage for the current user                                                                                                                 |
| created_at                       | string(date-time)                                                 | false    | read-only    | Datetime of course creation                                                                                                                                                          |
| created_by                       | [User Minimal](/docs/apireference/v2/schemas/user_minimal)        | false    | read-only    | The course creator                                                                                                                                                                   |
| categories                       | list([Category](/docs/apireference/v2/schemas/category))          | false    | none         | The categories associated to the course                                                                                                                                              |

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
