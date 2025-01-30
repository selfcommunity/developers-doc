---
sidebar_label: Course Quiz Question Answer
sidebar_position: 1
title: Course Quiz Question Answer
---

```json
{
  "id": "integer",
  "text": "string",
  "correct": "boolean",
  "selected": "boolean"
}
```

#### Properties

| Name     | Type    | Required | Restrictions | Description                                                                                                                                                                                                                    |
|----------|---------|----------|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id       | integer | false    | read-only    | Unique integer value identifying this lesson course                                                                                                                                                                            |                                                                        
| text     | string  | true     | none         | The answer text                                                                                                                                                                                                                |
| correct  | boolean | false    | none         | Define if the current answer is correct; default: false.<br/>Only creator and managers can see this property                                                                                                                   |
| selected | boolean | false    | read-only    | Define if the current answer is selected by the current user as the correct answer.<br/>This property is only available inside the property `last_attempt` of the [Course Lesson](/docs/apireference/v2/schemas/course_lesson) |
