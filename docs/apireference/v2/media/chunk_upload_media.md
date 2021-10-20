---
sidebar_label: Chunk Upload Media
sidebar_position: 1
title: Chunk Upload Media
---

This endpoint performs the chunk upload of a media with type image or document.

:::info

 The client must split the file into chunks and send to the server in series. After all the chunks have been uploaded the client must call the [Chunk Upload Complete](#opIdcreateMediaChunkComplete) endpoint with the given `upload_id` parameter to finalize the upload and retrieve the [Media](#schemamedia).

To perform chunk upload the request must contain `Content-Range` header with the information about the chunk.

Max file size for image file is 5M.

Max file size for document file is 50M.

Max chunk size is 204800 bytes.

:::

:::info

This operation requires authentication

:::

## HTTP Request

`POST /api/v2/media/upload/chunk/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|» Content-Range|header|string|true|range of the chunk upload in the format `bytes start-end/total`|
|» upload_id|body|string|true|returned by the first call and required from the second|
|» expires|body|string|false|expiration time|
|» image|body|blob|false|Image chunk to be uploaded|
|» document|body|blob|false|Document chunk to be uploaded|

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "upload_id": "string",
  "offset": "string"
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
  "upload_id": "string",
  "offset": "string",
  "image": "blob"
}';
const headers = {
  'Content-Type':'multipart/form-data',
  'Content-Range': 'bytes 1433600-1638399/2124437',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/media/upload/chunk/',
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
curl -X POST /api/v2/media/upload/chunk/ \
  -H 'Content-Type: multipart/form-data' \
  -H 'Content-Range: bytes 1433600-1638399/2124437' \
  -H 'Accept: application/json' \
  -H "Transfer-Encoding: chunked" \
  -H "Authorization: Bearer {access_token}"
  --data-binary $'------WebKitFormBoundaryT4U3VeMJUOwfER55\r\nContent-Disposition: form-data; name="image"; filename="p.gif"\r\nContent-Type: image/gif\r\n\r\n\r\n------WebKitFormBoundaryT4U3VeMJUOwfER55--\r\n' \
  --compressed
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[ChunkMedia](#schemachunkmedia)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "upload_id": "string",
  "offset": "string",
  "expires": "string"
}
```

</TabItem>
</Tabs>
````




