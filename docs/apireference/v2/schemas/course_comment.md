---
sidebar_label: Course Comment
sidebar_position: 1
title: Course Comment
---

```json
{
  "id": "integer",
  "html": "string",
  "parent": "integer",
  "in_reply_to": "integer",
  "created_at": "string",
  "created_by": {},
  "medias": [],
  "latest_comment": {},
  "replies": [],
  "extras": {
    "course": {
      "id": "integer",
      "slug": "string"
    },
    "section": {
      "id": "integer",
      "name": "string"
    },
    "lesson": {
      "id": "integer",
      "name": "string"
    }
  }
}
```

#### Properties

| Name         | Type                                                                 | Required | Restrictions | Description                                                                                                                                                                                                           |
|--------------|----------------------------------------------------------------------|----------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id           | integer                                                              | false    | read-only    | Unique integer value identifying this comment on a specific comment                                                                                                                                                   |                                                                        
| text         | string                                                               | false    | write-only   | The comment text.<br/>Default: empty string.<br/>Only available when creating or updating a comment                                                                                                                   |
| html         | string                                                               | false    | read-only    | The comment text.<br/>Only available when getting a comment                                                                                                                                                           |
| parent       | integer¦null                                                         | false    | none         | Id of the parent [Course Comment](/docs/apireference/v2/schemas/course_comment)                                                                                                                                       |
| in_reply_to  | integer¦null                                                         | false    | none         | Id of the reply [Course Comment](/docs/apireference/v2/schemas/course_comment).<br/>It must have the same `parent`                                                                                                    |
| created_at   | string(date-time)                                                    | false    | read-only    | Datetime of comment creation                                                                                                                                                                                          |
| created_by   | [User Minimal](/docs/apireference/v2/schemas/user_minimal)           | false    | read-only    | The comment creator                                                                                                                                                                                                   |
| medias       | list(integer)                                                        | false    | none         | List of id of [Media](/docs/apireference/v2/schemas/media) for this comment                                                                                                                                           |
| latest_reply | [Course Comment](/docs/apireference/v2/schemas/course_comment)¦null  | false    | read-only    | The last comment in reply to (with parent) this comment.<br/>Not available if `replies` are presents.                                                                                                                 |
| replies      | list([Course Comment](/docs/apireference/v2/schemas/course_comment)) | false    | read-only    | The list of comments in reply to (with parent) this comment.<br/>Not available if latest_reply are presents.<br/>Only available on the route: [Get Course Comments](/docs/apireference/v2/course/get_course_comments) |
| extras       | object                                                               | false    | read-only    | Some extra useful data for the call that retrieves all the comments received within the entire course.<br/>Only available on the route: [Get Course Comments](/docs/apireference/v2/course/get_course_comments)       |
| » course     | object                                                               | true     | read-only    | The course object associated to this comment                                                                                                                                                                          |
| » » id       | number                                                               | true     | read-only    | Id of the course                                                                                                                                                                                                      |
| » » slug     | string                                                               | true     | read-only    | Slug of the course                                                                                                                                                                                                    |
| » section    | object                                                               | true     | read-only    | The section object associated to this comment                                                                                                                                                                         |
| » » id       | number                                                               | true     | read-only    | Id of the section                                                                                                                                                                                                     |
| » » name     | string                                                               | true     | read-only    | Section name                                                                                                                                                                                                          |
| » lesson     | object                                                               | true     | read-only    | The lesson object associated to this comment                                                                                                                                                                          |
| » » id       | number                                                               | true     | read-only    | Id of the lesson                                                                                                                                                                                                      |
| » » name     | string                                                               | true     | read-only    | Lesson name                                                                                                                                                                                                           |
