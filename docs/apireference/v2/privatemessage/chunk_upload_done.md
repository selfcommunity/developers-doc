---
sidebar_label: Chunk Upload Done
sidebar_position: 1
title: Chunk Upload Done
---

This endpoint finalizes the chunk upload and creates the [File](/docs/apireference/v2/schemas/file)

:::info

This operation requires authentication

:::

## HTTP Request

`POST /api/v2/pm/upload/?done/`

### Parameters

|Name|In|Type|Required| Description                                      |
|---|---|---|---|--------------------------------------------------|
|done|query|string|true| Path string                                      |
|uuid|body|string|true| The file uuid returned by the first chunk upload |
|filename|body|string|true| The name of the file to upload                   |
|totalparts|body|integer|false| The number of total parts of the chunk to upload |
|md5|body|string|false| The MD5 of the file to upload                    |
|filetype|body|string|false| The type of the file to upload                   |
|totalfilesize|body|integer|false| The size of the file to upload                   |



#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "uuid": "string",
  "filename": "string"
  "totalparts": "integer"
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
  "uuid": "string",
  "filename": "string",
  "totalparts": "integer"
}';
const headers = {
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/pm/upload/?done/',
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
curl -X POST /api/v2/pm/upload/?done/ \
  -H "Authorization: Bearer {access_token}"
  --body-data 'uuid=5ffbebd3-60a7-4b35-ba39-74e7021b0e44&filename=compressed.tracemonkey-pldi-09.pdf&totalparts=5' \
   'https://apiv2.quentrix.com/api/v2/pm/upload/?done'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema |
|--------|---------------------------------------------------------|----------------------|--------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | Inline |

### Response Schema

Status Code **200**

| Name      | Type   | Required | Restrictions | Description  |
|-----------|--------|----------|--------------|--------------|
| file_url  | string | false    | none         | The file url |
| file_uuid | string | false    | read-only    | The file id  |

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




