---
sidebar_label: List of Dynamic Preference Events
sidebar_position: 7
title: List of Dynamic Preference Events
---

| Event                      | Triggered When                  |
|----------------------------|---------------------------------|
| dynamic_preference.updated | a Dynamic Preference is updated |

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
    "data": {
        [Dynamic Preference schema]
    }
}
```

</TabItem>
</Tabs>
````

[Dynamic Preference schema](/docs/apireference/v2/schemas/dynamic_preference)