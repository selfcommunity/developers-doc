---
sidebar_label: Create an Embed
sidebar_position: 1
title: Create an Embed
---

This endpoint creates an Embed

:::info

This operation requires admin role.

:::

## HTTP Request

`POST /api/v2/embed/`

### Parameters

|Name|In|Type|Required| Description                                                                                                                                |
|---|---|---|---|--------------------------------------------------------------------------------------------------------------------------------------------|
|» id|body|integer|false| A unique integer value identifying this embed                                                                                              |
|» embed_type|body|string|true| Type of the embed, can be any string except `sc_link` that are used for embedded objects auomatically created by the community |
|» embed_id|body|string|true| External id for the embed object                                                                                                           |
|» url|body|string(uri)¦null|false| Url for the resource, if any                                                                                                               |
|» metadata|body|json|false| Metadata associated to this embed. It mus be a valid json object                                                                           |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "embed_type": "string",
  "embed_id": "string",
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
  "embed_type": "string",
  "embed_id": "string",
  "url": "string(uri)",
  "metadata": {}
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/embed/',
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
curl -X POST /api/v2/embed/ \
  --H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  --data-raw '{
      "embed_type": "string",
      "embed_id": "string",
      "url": "string(uri)",
      "metadata": {}
}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Response status code|[Embed](/docs/apireference/v2/schemas/embed)|

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




