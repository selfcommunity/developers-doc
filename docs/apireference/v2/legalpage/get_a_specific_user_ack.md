---
sidebar_label: Get a Specific User Ack
sidebar_position: 1
title: Get a Specific User Ack
---

This endpoint retrieves a specific user ack.

:::info

This operation require authentication.
:::


## HTTP Request

`GET /api/v2/legal_page/{id}/user_ack/`

### Parameters

| Name | In   | Type   | Required | Description                                        |
|------|------|--------|----------|----------------------------------------------------|
| id   | path | string | true     | A unique integer value identifying this legal page |

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

fetch('/api/v2/legal_page/{id}/user_ack/',
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
curl -X GET /api/v2/legal_page/{id}/user_ack/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses
| Status | Meaning                                                 | Description          | Schema                                                         |
|--------|---------------------------------------------------------|----------------------|----------------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [Legal Page Ack](/docs/apireference/v2/schemas/legal_page_ack) |




