---
sidebar_label: Get Subscription Status 
sidebar_position: 1
title: Get Subscription Status 
---

This endpoint retrieves the subscription status for a specific event identified by \{id}.

:::info

This operation requires authentication.

:::

## HTTP Request

`GET /api/v2/event/{id}/status/`


### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this event|

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

fetch('/api/v2/event/{id}/status/',
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
curl -X GET /api/v2/event/{id}/status/ \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning| Description    | Schema |
|---|---|----------------|--------|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code| Inline |

#### Status values

| Parameter | Value      |
|-----------|------------|
| status | null       |
| status | subscribed |
| status | invited    |
| status | requested  | 
| status | going      | 
| status | not_going  | 


### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "status": "string",
}
```

</TabItem>
</Tabs>
````
