---
sidebar_label: Get a Specific Custom Adv
sidebar_position: 1
title: Get a Specific Custom Adv
---

This endpoint retrieves a specific custom adv.

:::info

This operation requires authentication only if `content_availability` community option is false.

This operation requires `custom_adv_enabled` community option set to true.

If `custom_adv_only_for_anonymous_users_enabled` community option is set to true the results will be returned only for anonymous users.

:::

## HTTP Request

`GET /api/v2/custom_adv/{id}/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this custom adv.|

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

fetch('/api/v2/custom_adv/{id}/',
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
curl -X GET /api/v2/custom_adv/{id}/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses
|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Custom Adv](../schemas/custom_adv)|

### Example responses

````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": 0,
  "position": "BELOW_TOPBAR",
  "title": "string",
  "link": "http://example.com",
  "image": "string",
  "embed_code": "string",
  "active": true,
  "created_at": "2019-08-24T14:15:22Z",
  "lastmod_datetime": "2019-08-24T14:15:22Z",
  "category": 0,
  "created_by": 0
}
```

</TabItem>
</Tabs>
````




