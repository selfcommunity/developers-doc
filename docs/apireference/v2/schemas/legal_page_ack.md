---
sidebar_label: Legal Page Ack
sidebar_position: 1
title: Legal Page Ack
---

```json
{ 
  "id": 0,
  "accepted_at": "2019-08-24T14:15:22Z",
  "not_accepted_at": "2019-08-24T14:15:22Z",
  "policy_document": 0,
  "user": 0
}
```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|Unique integer value identifying this ack|
|accepted_at|string(date-time)¦null|false|none|This policy has been accepted in this datetime|
|not_accepted_at|string(date-time)¦null|false|none|This policy has been refused in this datetime|
|policy_document|integer|true|none|The id of the policy document|
|user|integer|true|none|The id of the user|