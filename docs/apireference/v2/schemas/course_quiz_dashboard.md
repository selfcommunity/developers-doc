---
sidebar_label: Course Quiz Dashboard
sidebar_position: 1
title: Course Quiz Dashboard
---

```json
{
  "id": "integer",
  "course_id": "integer",
  "section_id": "integer",
  "lesson_id": "integer",
  "name": "string",
  "created_at": "string",
  "grade": "integer",
  "result": "string",
  "user": {}
}

```

#### Properties

| Name       | Type                                                                            | Required | Restrictions | Description                                                                                |                                                                
|------------|---------------------------------------------------------------------------------|----------|--------------|--------------------------------------------------------------------------------------------|
| id         | integer                                                                         | false    | read-only    | Unique integer value identifying this quiz attempt                                         |                                                                        
| course_id  | integer                                                                         | false    | read-only    | Unique integer value identifying the course of this quiz                                   |
| section_id | integer                                                                         | false    | read-only    | Unique integer value identifying the section of this quiz                                  |
| lesson_id  | integer                                                                         | false    | read-only    | Unique integer value identifying this quiz (lesson course)                                 |                                                                        
| name       | string                                                                          | false    | read-only    | The name of the lesson (quiz)                                                              |
| created_at | string(date-time)                                                               | false    | read-only    | Datetime of quiz attempt                                                                   |
| grade      | integer                                                                         | false    | read-only    | The grade (score in percentage) the user received at the end of the following quiz attempt |
| result     | [result](/docs/apireference/v2/schemas/course_quiz_dashboard#enumerated-values) | false    | read-only    | Enum to define the course subscription status of the current user                          |
| user       | [User Minimal](/docs/apireference/v2/schemas/user_minimal)                      | false    | read-only    | the user who attempted to solve the quiz                                                   |

#### Enumerated Values

| Property | Value       | Description                                                              |
|----------|-------------|--------------------------------------------------------------------------|
| result   | uncompleted | Quiz course completion status is uncompleted for the user                |
| result   | completed   | Quiz course completion status is completed for the user.<br/>Quiz passed |
| result   | failed      | Quiz course completion status is failed for the user                     |
