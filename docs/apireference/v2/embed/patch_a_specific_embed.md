---
sidebar_label: Patch a Specific Embed
sidebar_position: 1
title: Patch a Specific Embed
---

This endpoint patches a specific endpoint

:::info

You can use this endpoint to edit a single field passing only the id and the needed field (without mandatory fields).

:::

:::info

This operation requires authentication only if `content_availability` community option is false
:::

## HTTP Request

`PATCH /api/v2/embed/{id}/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this embed|
|» url|string(uri)¦null|false|none|Url for the resource, if any|
|» metadata|json|false|none|Metadata associated to this embed. It mus be a valid json object|

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "url": "string(uri)",
  "metadata": {}
}
```

</TabItem>
</Tabs>
````

### Example Request

````mdx-code-block

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = '{
  "url": "string(uri)",
  "metadata": {}
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/embed/{id}/',
{
  method: 'PATCH',
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
curl -X PATCH /api/v2/embed/{id}/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  --data-raw '{
    "url": "string(uri)"
  }'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description| Schema                                              |
|---|---|---|-----------------------------------------------------|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code| [Update Embed](/docs/apireference/v2/schemas/embed) |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": "integer",
  "embed_type": "string",
  "embed_id": "string",
  "url": "string(uri)",
  "metadata": {}
}
```

</TabItem>
</Tabs>
````




