---
sidebar_label: List of Feature Events
sidebar_position: 1
title: List of Custom Feature Events
---

| Event           | Triggered When       |
|-----------------|----------------------|
| feature.updated | a feature is updated |

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
        [Feature schema]
    }
}
```

</TabItem>
</Tabs>
````

[Feature schema](/docs/apireference/v2/schemas/feature)