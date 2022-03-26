---
sidebar_label: Get a Thread
sidebar_position: 2
title: Get a Thread
---

This endpoint retrieves all messages in a thread.


:::info

This operation requires authentication.

:::


## HTTP Request

`GET /api/v2/pm/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|thread|query|integer|(one between thread or user is required)|The id of the thread.|
|user|query|integer|(one between thread or user is required)|The id of the user.|
|before_message|query|integer|false|Return all messages before this id of the message (excluded before_message).|
|from_message|query|integer|false|Return all messages from this id of the message (included from_message).|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|


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

fetch('/api/v2/pm/?thread=3',
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
curl -X GET /api/v2/pm/?thread=3 \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|false|none|Total results count|
|» next|string(uri)¦null|false|none|Next page url|
|» previous|string(uri)¦null|false|none|Previous page url|
|» results|list([Private Message](/docs/apireference/v2/schemas/private_message))|false|none|List of results|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "count": 123,
  "next": "string(uri)",
  "previous": "string(uri)",
  "results": [ 
    {
      "id": 0,
      "headline": "string",
      "sender": "object",
      "receiver": "object",
      "created_at": "2019-08-24T14:15:22Z",
      "last_message_at": "2019-08-24T14:15:22Z",
      "thread_status": "string"
    },
    {
      "id": 0,
      "headline": "string",
      "sender": "object",
      "receiver": "object",
      "created_at": "2019-08-24T14:15:22Z",
      "last_message_at": "2019-08-24T14:15:22Z",
      "thread_status": "string"
    }    
  ]
}
```

</TabItem>
</Tabs>
````




