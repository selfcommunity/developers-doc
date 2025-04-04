---
sidebar_label: Course Lesson
sidebar_position: 1
title: Course Lesson
---

```json
{
  "id": "integer",
  "name": "string",
  "type": "string",
  "status": "string",
  "comments_enabled": "boolean",
  "completion_status": "string",
  "course_id": "integer",
  "section_id": "integer",
  "html": "string",
  "created_at": "string",
  "created_by": {},
  "medias": [],
  "passing_grade": "integer",
  "questions_order": [],
  "questions": [],
  "last_attempt": {}
}
```

#### Properties

| Name              | Type                                                                               | Required | Restrictions | Description                                                                                                                                                                                                               |
|-------------------|------------------------------------------------------------------------------------|----------|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                | integer                                                                            | false    | read-only    | Unique integer value identifying this lesson course                                                                                                                                                                       |                                                                        
| name              | string                                                                             | true     | none         | Name of the lesson course                                                                                                                                                                                                 |
| type              | [type](/docs/apireference/v2/schemas/course_lesson#enumerated-values)              | true     | none         | Enum to define the course lesson type                                                                                                                                                                                     |
| status            | [status](/docs/apireference/v2/schemas/course_lesson#enumerated-values)            | false    | none         | Enum to define the course lesson status.<br/>Default: draft                                                                                                                                                               |                                                                       
| comments_enabled  | boolean                                                                            | false    | none         | Enable the comments on the current lesson; if enabled, the users can comment the current lesson.<br/>Default: true                                                                                                        |                                                                                                                
| completion_status | [completion_status](/docs/apireference/v2/schemas/course_lesson#enumerated-values) | false    | read-only    | Enum to define the course lesson completion status for the user                                                                                                                                                           |                                                                       
| course_id         | integer                                                                            | false    | read-only    | Unique integer value identifying the course of the lesson                                                                                                                                                                 |                                                                        
| section_id        | integer                                                                            | false    | read-only    | Unique integer value identifying the section of the lesson                                                                                                                                                                |
| text              | string                                                                             | false    | write-only   | The lesson course text.<br/>Default: empty string.<br/>Only available when creating or updating a lesson course                                                                                                           |
| html              | string                                                                             | false    | read-only    | The lesson course text.<br/>>Only available when getting a lesson course                                                                                                                                                  |
| created_at        | string(date-time)                                                                  | false    | read-only    | Datetime of lesson course creation                                                                                                                                                                                        |
| created_by        | [User Minimal](/docs/apireference/v2/schemas/user_minimal)                         | false    | read-only    | The lesson course creator                                                                                                                                                                                                 |
| medias            | list(integer)                                                                      | false    | none         | List of id of [Media](/docs/apireference/v2/schemas/media) for the lesson course                                                                                                                                          |
| passing_grade     | integer                                                                            | false    | none         | Define the minimum percentage of score required for students to pass the quiz; default: 60                                                                                                                                |
| questions_order   | list(integer)                                                                      | false    | write-only   | Define the order of the questions for the lesson; should be a list of question ids                                                                                                                                        |
| questions         | list([Course Quiz Question](/docs/apireference/v2/schemas/course_question))        | false    | read-only    | List of [Course Quiz Question](/docs/apireference/v2/schemas/course_question) for the lesson                                                                                                                              |
| last_attempt      | list([Course Quiz Attempt](/docs/apireference/v2/schemas/course_attempt))          | false    | read-only    | Last [Course Quiz Attempt](/docs/apireference/v2/schemas/course_attempt) by the current user in this lesson course.<br/>The property contains all the questions the user has answered as these may have changed over time |

#### Enumerated Values

| Property          | Value       | Description                                                                                |
|-------------------|-------------|--------------------------------------------------------------------------------------------|
| type              | lesson      | Lesson course of type lesson                                                               |
| type              | quiz        | Lesson course of type quiz                                                                 |
| status            | draft       | Lesson course status is draft (not yet published for all the users that joined the course) |
| status            | published   | Lesson course status is published                                                          |
| completion_status | uncompleted | Lesson course completion status is uncompleted for the user                                |
| completion_status | completed   | Lesson course completion status is completed for the user                                  |
| completion_status | failed      | Lesson course completion status is failed for the user; for quiz                           |