---
sidebar_label: List of Custom Menu Events
sidebar_position: 5
title: List of Custom Menu Events
---

| Event               | Triggered When           |
|---------------------|--------------------------|
| custom_menu.created | a custom menu is created |
| custom_menu.updated | a custom menu is updated |
| custom_menu.deleted | a custom menu is deleted |

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
        [Custom Menu schema]
    }
}
```

</TabItem>
</Tabs>
````

[Custom Menu schema](/docs/apireference/v2/schemas/custom_menu)