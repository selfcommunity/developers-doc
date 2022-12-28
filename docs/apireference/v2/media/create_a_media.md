---
sidebar_label: Create a Media
sidebar_position: 3
title: Create a Media
---

This endpoint creates a Media

:::info

The allowed types for this endpoint are:

 - *vimeo* for video upload. The endpoint must receive the url of the video after the video is fully uploaded to vimeo servers by the client.

 - *url* for url fetch. The endpoint retrieve metadata associated with the given url and create a preview.

 - *share* for sharing a community object ([Post](/docs/apireference/v2/schemas/post), [Discussion](/docs/apireference/v2/schemas/discussion) or [Status](/docs/apireference/v2/schemas/status)). The community object can't contain a media of type share.

 - *embed* for external objects. The endpoint create an association with an external object using [Embed](/docs/apireference/v2/schemas/embed) format.


If *embed* parameter are set and no [Embed](/docs/apireference/v2/schemas/embed) with `embed_type` - `embed_id` are in the community database this endpoint create an [Embed](/docs/apireference/v2/schemas/embed) object with the metadata passed.

:::

:::info

This operation requires authentication

:::

## HTTP Request

`POST /api/v2/media/`

### Parameters

|Name|In|Type|Required| Description             |
|---|---|---|---|-------------------------|
|» type|body|string|true| The media type          |
|» url|body|string(uri)|if `type` is *url*| Required for type url   |
|» shared_object|body|integer|if `type` is *share*| Required for type share |
|» embed|body|[Embed](/docs/apireference/v2/schemas/embed)|if `type` is *embed*| The embed object        |

#### Enumerated Values

|Parameter|Value|Description|
|---|---|---|
|» type|vimeo|Vimeo video media type|
|» type|url|Url media type (used for any webpages, youtube or vimeo public videos)|
|» type|embed|External resource|

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "type": "string",
  "url": "string(uri)",
  "embed": {Embed}
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
  "type": "url",
  "url": "https://example.com",
  "embed": null
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/media/',
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
curl -X POST /api/v2/media/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  --data-raw '{
      "type": "string",
      "url": "string(uri)",
  }'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Response status code|[Media](/docs/apireference/v2/schemas/media)|

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




