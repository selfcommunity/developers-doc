---
sidebar_label: List of Legal Page Events
sidebar_position: 1
title: List of Legal Page Events
---

| Event              | Triggered When          |
|--------------------|-------------------------|
| legal_page.created | a legal page is created |
| legal_page.updated | a legal page is updated |

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
        [Legal Page schema]
    }
}
```

</TabItem>
</Tabs>
````

[Legal Page schema](/docs/apireference/v2/schemas/legal_page)