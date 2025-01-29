---
sidebar_label: Course Quiz Question
sidebar_position: 1
title: Course Quiz Question
---

```json
{
  "id": "integer",
  "type": "string",
  "image": "string",
  "text": "string",
  "answers": []
}
```

#### Properties

| Name    | Type                                                                             | Required | Restrictions | Description                                                                                                 |
|---------|----------------------------------------------------------------------------------|----------|--------------|-------------------------------------------------------------------------------------------------------------|
| id      | integer                                                                          | false    | read-only    | Unique integer value identifying this quiz question                                                         |                                                                        
| type    | [type](/docs/apireference/v2/schemas/course_question#enumerated-values)          | true     | none         | Enum to define the quiz question type                                                                       |
| image   | string                                                                           | false    | none         | The quiz image associated to this question                                                                  |
| text    | string                                                                           | true     | none         | The question text                                                                                           |
| answers | list([Course Quiz Answer](/docs/apireference/v2/schemas/course_question_answer)) | true     | none         | List of [Course Quiz Answer](/docs/apireference/v2/schemas/course_question_answer) for the current question |

#### Enumerated Values

| Property | Value         | Description                                                              |
|----------|---------------|--------------------------------------------------------------------------|
| type     | single_choice | Question type single_choice must have only have one correct answer       |
| type     | multi_choice  | Question type multi_choice must have at least one or more correct answer |