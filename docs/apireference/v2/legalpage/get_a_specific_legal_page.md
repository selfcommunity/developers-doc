---
sidebar_label: Get a Specific Legal Page
sidebar_position: 1
title: Get a Specific Legal Page
---

This endpoint retrieves a specific legal page.

:::info

This operation does not require authentication.

:::


## HTTP Request

`GET /api/v2/legal_page/{id}/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this legal page.|

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

fetch('/api/v2/legal_page/{id}/',
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
curl -X GET /api/v2/legal_page/{id}/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses
|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Legal Page](/docs/apireference/v2/schemas/legal_page)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": 0,
  "name_and_version": "string",
  "icon_class": "string",
  "label": "string",
  "external_url": "string",
  "html_summary": "string",
  "html_body": "string",
  "order": -2147483648,
  "valid_from": "2019-08-24",
  "valid_to": "2019-08-24",
  "created_at": "2019-08-24T14:15:22Z",
  "created_by": 0
}
```

</TabItem>
</Tabs>
````




