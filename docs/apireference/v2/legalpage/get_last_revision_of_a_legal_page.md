---
sidebar_label: Get Last Revision of a Legal Page
sidebar_position: 1
title: Get Last Revision of a Legal Page
---

This endpoint retrieves the last revision of a legal page.

:::info

This operation does not require authentication.
If the user is authenticated the 'ack' field will be added to the response with the user's ack status for that document.

:::


## HTTP Request

`GET /api/v2/legal_page/{policy}/`

### Parameters

| Name   | In   | Type   | Required | Description                                |
|--------|------|--------|----------|--------------------------------------------|
| policy | path | string | true     | Can be one between tec or privacy |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/legal_page/{policy}/',
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
curl -X GET /api/v2/legal_page/{policy}/ \
  -H 'Accept: application/json' 
```
</TabItem>
</Tabs>
````

## Responses
| Status | Meaning                                                 | Description          | Schema                                                 |
|--------|---------------------------------------------------------|----------------------|--------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [Legal Page](/docs/apireference/v2/schemas/legal_page) |
