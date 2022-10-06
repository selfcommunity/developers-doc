---
sidebar_label: Ack a Legal Page
sidebar_position: 3
title: Ack a Legal Page
---

This endpoint performs ack of a Legal Page.

:::info

This operation requires authentication

:::

## HTTP Request

`POST /api/v2/legal_page/{id}/ack/`

### Parameters

| Name   | In   | Type   | Required | Description                                                                     |
|--------|------|--------|----------|---------------------------------------------------------------------------------|
| id     | path | string | true     | A unique integer value identifying this Legal Page.                             |
| accept | body | string | false    | Accept or not accept a legal page, valid string values are: ('true', 'on', '1') |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = 'null';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/legal_page/{id}/ack/',
{
  method: 'POST',
  body: inputBody,
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
curl -X POST /api/v2/legal_page/{id}/ack/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description | Schema                                                         |
|--------|---------------------------------------------------------|-------------|----------------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | [Legal Page Ack](/docs/apireference/v2/schemas/legal_page_ack) |




