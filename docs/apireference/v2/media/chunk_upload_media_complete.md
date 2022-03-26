---
sidebar_label: Chunk Upload Media Complete
sidebar_position: 2
title: Chunk Upload Media Complete
---

This endpoint completes the chunk upload and create the [Media](/docs/apireference/v2/schemas/media)

:::info

This operation requires authentication

:::


## HTTP Request

`POST /api/v2/media/upload/complete/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|» type|body|string|false|Default to image or document based on file extension|
|» upload_id|body|string|true|Id of the chunk uploaded file|
|» md5|body|string|true|MD5 hash of the original file for checksum proposal|

#### Enumerated Values

|Parameter|Value|Description|
|---|---|---|
|» type|image|Image media type|
|» type|doc|Document media type (only pdf documents are supported)|
|» type|eimage|Other images related to contributes. eg. Images uploaded and inserted as `<img>` into the contribute text|

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "type": "image",
  "upload_id": "string",
  "md5": "string"
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
  "type": "image",
  "upload_id": "string",
  "md5": "string"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/media/upload/complete/',
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
curl -X POST /api/v2/media/upload/complete/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  --data-raw 'upload_id=UPLOAD_ID&md5=FILE_MD5' \
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[Media](/docs/apireference/v2/schemas/media)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": 0,
  "added_at": "2019-08-24T14:15:22Z",
  "type": "image",
  "title": null,
  "description": null,
  "url": null,
  "image": "string",
  "image_width": 0,
  "image_height": 0,
  "order": 0,
  "embed": null
}
```

</TabItem>
</Tabs>
````




