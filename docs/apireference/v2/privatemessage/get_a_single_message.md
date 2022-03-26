---
sidebar_label: Get a Single Message
sidebar_position: 3
title: Get a Single Message
---

This endpoint retrieves a single message using ID.


:::info

This operation requires authentication.

:::


## HTTP Request

`GET /api/v2/pm/{id}/`


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

fetch('/api/v2/pm/{id}/',
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
curl -X GET /api/v2/pm/{id}/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Private Message](/docs/apireference/v2/schemas/private_message)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

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




