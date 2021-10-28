---
sidebar_label: Webhook Payload
sidebar_position: 4
title: Webhook Payload
---

The body of a webhook payload is a JSON object that describes the target that triggered the webhook, as well as the event that has been triggered.


### Properties

| Name    | Type   | Required | Description                                                                   |
|---------|--------|----------|-------------------------------------------------------------------------------|
| event_id| integer| true     | The id of the event that triggered the webhook                                |
| type    | string | true     | The name of the event that triggered the webhook                              |
| created | float  | true     | The time or date that the event was triggered at                              |
| data    | object | true     | Object that contains information about the event associated with the webhook. |


````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "event_id": 0,
    "type": "string",
    "created": 1625471209.139224,
    "data": {}
}
```

</TabItem>
</Tabs>
````

