---
sidebar_label: Reaction
sidebar_position: 1
title: Reaction
---

```json
{
  "id": "integer",
  "label": "string",
  "sentiment": "integer",
  "image": "string(uri)",
  "active": "boolean"
}
```

#### Properties

| Name      | Type        | Description                                      |
|-----------|-------------|--------------------------------------------------|
| id        | integer     | A unique integer value identifying this reaction |
| label     | string      | The label of the reaction (unique)               |
| sentiment | integer     | The sentiment value associated to the reaction   |
| image     | string(uri) | The image of the reaction                        |
| active    | boolean     | Is this reaction active?                         |
