---
sidebar_label: Private Message
sidebar_position: 1
title: Private Message
---

```json
{
  "id": 0,
  "active": true,
  "name": "string",
  "type": "string",
  "description": "string",
  "color": "string",
  "visible": true,
  "created_at": "2019-08-24T14:15:22Z",
  "deleted": false
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|Unique integer value identifying this tag|
|headline|string|true|none|Text message|
|html|string|true|none|Text message in html format|
|sender|[User](../schemas/user)]|true|none|User that send the private message|
|sent_at|string(date-time)|false|read-only|Send date time|
|status|int|false|none|Message status: created, deleted or hidden|

|Property|Value|Description|
|---|---|---|
|status|0|Message created|
|status|2|Message deleted|
|status|3|Message hidden|
