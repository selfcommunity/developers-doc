---
sidebar_label: Private Message
sidebar_position: 1
title: Private Message
---


## SCPrivateMessageType

#### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|id|number|false|read-only|Id of the message|
|sender|[SCUserType](../Types/user)|false|The sender/creator of the thread|
|sender_id|number|false|The id of the user who sent the message|
|receiver|[SCUserType](../Types/user)|false|Receiver user|
|html|string|false|Html|
|created_at|Date|false|Send date time|
|last_message_at|Date|false|datetime of last message reply|
|thread_status|[SCPrivateMessageStatusType](#scprivatemessagestatustype)|false|Message status: created, deleted or hidden message|
|file|any|false|The private message file|
|headline|string|false|The headline/snippet|
|message|string|true|Message content|
|status|string|true|Message status: created, deleted or hidden message|





### SCPrivateMessageStatusType

|Name|Value|
|---|---|
|CREATED|'created'|
|DELETED|'deleted'|
|HIDDEN|'hidden'|
|NEW|'new'|