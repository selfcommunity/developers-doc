---
sidebar_label: Upload a Media
sidebar_position: 6
title:  Upload a Media
---

This endpoint uploads a media.

:::info

This operation requires authentication.

:::

## HTTP Request

`POST /api/v2/pm/upload/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file|body|blob|true|The file to upload|
|filetype|body|string|false|The type of the file to upload|
|filename|body|string|false|The name of the file to upload|
|duration|body|integer|false|The duration (in seconds) of the video or audio track to upload|
|totalfilesize|body|integer|false|The size of the file to upload|
|md5|body|string|false|The MD5 of the file to upload|

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
 file: "blob"   
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
const headers = {
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/pm/upload/',
{
  method: 'POST',
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
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code|Inline|

### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_url|string|false|none|The file url|
|file_uuid|string|false|read-only|The file id|


### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "file_url": "string",
    "file_uuid": "string"
}
```

</TabItem>
</Tabs>
````




