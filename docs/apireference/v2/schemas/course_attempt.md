---
sidebar_label: Course Quiz Attempt
sidebar_position: 1
title: Course Quiz Attempt
---

```json
{
  "id": "integer",
  "created_at": "string",
  "lesson_id": "integer",
  "user_id": "integer",
  "quiz_attempt": {
    "grade": "integer",
    "result": "string",
    "questions": [],
    "num_attempts": "integer",
    "passing_grade": "integer",
    "correct_responses": "integer"
  }
}

```

#### Properties

| Name                | Type                                                                        | Required | Restrictions | Description                                                                                                                |
|---------------------|-----------------------------------------------------------------------------|----------|--------------|----------------------------------------------------------------------------------------------------------------------------|
| id                  | integer                                                                     | false    | read-only    | Unique integer value identifying this quiz attempt                                                                         |                                                                        
| created_at          | string(date-time)                                                           | false    | read-only    | Datetime of quiz attempt                                                                                                   |
| lesson_id           | integer                                                                     | false    | read-only    | Unique integer value identifying this quiz (lesson course)                                                                 |                                                                        
| user_id             | integer                                                                     | false    | read-only    | Unique integer value identifying the user that made the quiz attempt                                                       |
| quiz_attempt        | object                                                                      | false    | read-only    | The detailed quiz attempt                                                                                                  |
| » grade             | integer                                                                     | false    | read-only    | The grade (score in percentage) the user received at the end of the following quiz attempt                                 |
| » result            | [result](/docs/apireference/v2/schemas/course_attempt#enumerated-values)    | false    | read-only    | The result of the current quiz attempt                                                                                     |
| » questions         | list([Course Quiz Question](/docs/apireference/v2/schemas/course_question)) | false    | read-only    | List of [Course Quiz Question](/docs/apireference/v2/schemas/course_question) that made up the quiz that the user answered |
| » num_attempts      | integer                                                                     | false    | read-only    | Number of attempts made by the user                                                                                        |
| » passing_grade     | integer                                                                     | false    | read-only    | Define the minimum percentage of score required for students to pass the quiz                                              |
| » correct_responses | integer                                                                     | false    | read-only    | Number of correct answers                                                                                                  |

#### Enumerated Values

| Property | Value       | Description                                                              |
|----------|-------------|--------------------------------------------------------------------------|
| result   | uncompleted | Quiz course completion status is uncompleted for the user                |
| result   | completed   | Quiz course completion status is completed for the user.<br/>Quiz passed |
| result   | failed      | Quiz course completion status is failed for the user                     |