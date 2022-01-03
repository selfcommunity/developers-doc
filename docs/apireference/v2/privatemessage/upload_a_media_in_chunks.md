---
sidebar_label: Upload a Media in Chunks
sidebar_position: 7
title: Upload a Media in Chunks
---

This endpoint performs the chunk upload of a file.

:::info

This operation requires authentication

:::

:::info

 The client must split the file into chunks and send to the server in series. After all the chunks have been uploaded the client must call the [Chunk Upload Done](../privatemessage/chunk_upload_done) endpoint with the given `qqfilename` parameter to finalize the upload and retrieve the [File](../schemas/file).


:::

## HTTP Request

`POST /api/v2/pm/upload/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|qqfile|body|blob|true|The file to upload|
|qquuid|body|string|true*|The file uuid returned by the first chunk upload. It is required only when qqpartindex > 0|
|qqpartindex|body|integer|true|The index of the chunk part to upload. It starts at 0 and reaches qqtotalparts -1|
|qqtotalparts|body|integer|true|The number of total parts of the chunk to upload|
|qqfiletype|body|string|false|The type of the file to upload|
|qqtotalfilesize|body|integer|false|The size of the file to upload|
|qqpartbyteoffset|body|integer|false|The chunk byte offset|
|qqchunksize|body|integer|false|The size of the chunk|
|qqfilename|body|string|false|The name of the file to upload|

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "qqpartindex": 0,
  "qqtotalparts": 5,
  "qqfile": "blob"
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
  "qqpartindex": 0,
  "qqtotalparts": 5,
  "qqfile": "blob"
}';
const headers = {
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/pm/upload/',
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
curl -X POST /api/v2/pm/upload/ \
  -H "Authorization: Bearer {access_token}"
  --body-data 'qqpartindex=0&qqtotalparts=5' \
   'https://apiv2.quentrix.com/api/v2/pm/upload/'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[File](../schemas/file)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "file_uuid": "string"
}
```

</TabItem>
</Tabs>
````




