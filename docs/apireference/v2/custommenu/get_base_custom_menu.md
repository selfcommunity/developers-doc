---
sidebar_label: Get Base Custom menu
sidebar_position: 1
title: Get Base Custom menu
---

This endpoint retrieves the base (default) custom menu.


:::info

Custom Menus are a "public object" visible both to not authenticated users and in closed communities.

:::


## HTTP Request

`GET /api/v2/custom_menu/base/`


### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js

const headers = {
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/custom_menu/base/',
{
  method: 'GET',
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

</TabItem>
<TabItem value="bash">

```bash
# You can also use wget
curl -X GET /api/v2/custom_menu/base/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses
| Status | Meaning                                                 | Description          | Schema                                                   |
|--------|---------------------------------------------------------|----------------------|----------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [Custom Menu](/docs/apireference/v2/schemas/custom_menu) |

