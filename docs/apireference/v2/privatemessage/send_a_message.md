---
sidebar_label: Send a Message
sidebar_position: 4
title: Send a Message
---

This endpoint sends a message.


:::info

This operation requires authentication. The logged user must be followed by recipients.

:::

## HTTP Request

`POST /api/v2/pm/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recipients|body|integer|true|The id(s) of the recipient(s) of the message|
|message|body|string|false*|The content of the message. It is required when file_uuid param is missing|
|file_uuid|body|[File](/docs/apireference/v2/schemas/file)|false|The private message file|

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "recipients": [115],
	"message": "string"
}
```

</TabItem>
</Tabs>


### Example Request

````mdx-code-block

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js

const headers = {
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/pm/',
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
curl -X POST /api/v2/pm/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[Private Message](/docs/apireference/v2/schemas/private_message)|

### Example responses


````mdx-code-block

<Tabs defaultValue="201" values={[{ label: '201', value: '201', }]}>
<TabItem value="201">

```json
{
    "id": 1,
    "sender_id": 170,
    "message": "string",
    "created_at": "2021-12-27T11:10:27.729971+01:00",
    "status": "string",
    "file": {
          "uuid": "string",
          "filename": "string",
          "filesize": 17037,
          "mimetype": "string",
          "duration": 120,
          "url": "string",
          "thumbnail": "string"
          }
}
```

</TabItem>
</Tabs>
````




