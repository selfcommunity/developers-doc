---
sidebar_label: Get a specific Media
sidebar_position: 4
title: Get a specific Media
---

This endpoint retrieves a specific media using ID.

:::info

This operation requires authentication

:::


## HTTP Request

`GET /api/v2/media/{id}/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this media|

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

fetch('/api/v2/media/{id}/',
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
curl -X GET /api/v2/media/{id}/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
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




