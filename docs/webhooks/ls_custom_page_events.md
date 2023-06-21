---
sidebar_label: List of Custom Page Events
sidebar_position: 5
title: List of Custom Page Events
---

| Event               | Triggered When           |
|---------------------|--------------------------|
| custom_page.created | a custom page is created |
| custom_page.updated | a custom page is updated |
| custom_page.deleted | a custom page is deleted |

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
        [Custom Page schema]
    }
}
```

</TabItem>
</Tabs>
````

[Custom Page schema](/docs/apireference/v2/schemas/custom_page)