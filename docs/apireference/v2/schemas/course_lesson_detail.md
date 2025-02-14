---
sidebar_label: Course Lesson Detail
sidebar_position: 1
title: Course Lesson Detail
---

```json
{
  "id": "integer",
  "name": "string",
  "type": "string",
  "status": "string",
  "comments_enabled": "boolean",
  "completion_status": "string"
}
```

#### Properties

| Name              | Type                                                                                      | Required | Restrictions | Description                                                                                                        |
|-------------------|-------------------------------------------------------------------------------------------|----------|--------------|--------------------------------------------------------------------------------------------------------------------|
| id                | integer                                                                                   | false    | read-only    | Unique integer value identifying this lesson course                                                                |                                                                        
| name              | string                                                                                    | true     | read-only    | Name of the lesson course                                                                                          |
| type              | [type](/docs/apireference/v2/schemas/course_lesson_detail#enumerated-values)              | true     | read-only    | Enum to define the course lesson type                                                                              |
| status            | [status](/docs/apireference/v2/schemas/course_lesson_detail#enumerated-values)            | false    | read-only    | Enum to define the course lesson status.<br/>Default: draft                                                        |                                                                       
| comments_enabled  | boolean                                                                                   | false    | read-only    | Enable the comments on the current lesson; if enabled, the users can comment the current lesson.<br/>Default: true |                                                                                                                
| completion_status | [completion_status](/docs/apireference/v2/schemas/course_lesson_detail#enumerated-values) | false    | read-only    | Enum to define the course lesson completion status for the user                                                    |                                                                       

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