---
sidebar_label: Course Quiz Make Attempt
sidebar_position: 1
title: Course Quiz Make Attempt
---

```json
{
  "responses": [
    {
      "question_id": "integer",
      "selected_options": []
    }
  ]
}

```

#### Properties

| Name               | Type          | Required | Restrictions | Description                                                                   |
|--------------------|---------------|----------|--------------|-------------------------------------------------------------------------------|
| responses          | list(object)  | true     | write-only   | The list of answers for the current quiz                                      |
| » question_id      | integer       | true     | write-only   | Unique integer value identifying a question of the current quiz               |                                                                        
| » selected_options | list(integer) | true     | write-only   | List of answered selected by the user as the correct answer for `question_id` |
