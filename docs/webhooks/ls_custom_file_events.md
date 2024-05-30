---
sidebar_label: List of Custom File Events
sidebar_position: 1
title: List of Custom File Events
---

| Event               | Triggered When           |
|---------------------|--------------------------|
| custom_file.created | a custom file is created |
| custom_file.deleted | a custom file is deleted |

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
        [Custom File schema]
    }
}
```

</TabItem>
</Tabs>
````

[Custom File schema](/docs/apireference/v2/schemas/custom_file)