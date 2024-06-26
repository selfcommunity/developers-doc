---
sidebar_label: Update a Media
sidebar_position: 1
title: Update a Media
---

This endpoint updates a Media

:::info

It must be used for media of `type` *url* for set the preview image that can be choosed between the images returned by the [create](/docs/apireference/v2/media/create_a_media) endpoint or other images that can be retrieved by an url.

:::

:::info

This operation requires authentication. The logged user must be the media creator

:::

## HTTP Request

`PUT /api/v2/media/{id}/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this media object|
|» image|body|string(uri)|true|Image url|

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "image": "https://example.com"
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
  "image": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/media/{id}/',
{
  method: 'PUT',
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
curl -X PUT /api/v2/media/{id}/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  --data-raw '{
    "image": "string"
  }'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code|[Media](/docs/apireference/v2/schemas/media)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": "integer",
  "added_at": "string",
  "type": "string",
  "title": "string",
  "description": "string",
  "url": "string(uri)",
  "image": "string",
  "image_width": "integer",
  "image_height": "integer",
  "order": "integer",
  "embed": {Embed}
}
```

</TabItem>
</Tabs>
````




