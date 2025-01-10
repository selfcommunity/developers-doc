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
  "comments_enabled": "boolean"
}
```

#### Properties

| Name   | Type                                                                    | Required | Restrictions | Description                                                 |
|--------|-------------------------------------------------------------------------|----------|--------------|-------------------------------------------------------------|
| id     | integer                                                                 | false    | read-only    | Unique integer value identifying this lesson course         |                                                                        
| name   | string                                                                  | true     | read-only    | Name of the lesson course                                   |
| type   | [type](/docs/apireference/v2/schemas/course_lesson#enumerated-values)   | true     | read-only    | Enum to define the course lesson type                       |
| status | [status](/docs/apireference/v2/schemas/course_lesson#enumerated-values) | false    | read-only    | Enum to define the course lesson status.<br/>Default: draft |                                                                       

#### Enumerated Values

| Property | Value     | Description                                                                                |
|----------|-----------|--------------------------------------------------------------------------------------------|
| type     | lesson    | Lesson course of type lesson                                                               |
| type     | quiz      | Lesson course of type quiz                                                                 |
| status   | draft     | Lesson course status is draft (not yet published for all the users that joined the course) |
| status   | published | Lesson course status is published                                                          |
