---
sidebar_label: Course Quiz Question Answer
sidebar_position: 1
title: Course Quiz Question Answer
---

```json
{
  "id": "integer",
  "text": "string",
  "correct": "boolean"
}
```

#### Properties

| Name    | Type    | Required | Restrictions | Description                                             |
|---------|---------|----------|--------------|---------------------------------------------------------|
| id      | integer | false    | read-only    | Unique integer value identifying this lesson course     |                                                                        
| text    | string  | true     | none         | The answer text                                         |
| correct | boolean | false    | none         | Define if the current answer is correct; default: false |
