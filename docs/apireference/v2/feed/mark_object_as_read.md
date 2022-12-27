---
sidebar_label: Mark a Specific Feed Object as Read
sidebar_position: 4
title: Mark a Specific Feed Object as Read
---

This endpoint marks as read a list of objects in the feed. Usually it is called when a [Feed](/docs/apireference/v2/schemas/feed) object enter the viewport of the user.


:::info

This operation requires authentication

:::


## HTTP Request
`POST /api/v2/feed/read/`


### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|» object|body|list|false|List of [Feed](/docs/apireference/v2/schemas/feed)'s object id|

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "object": ["integer"]
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

const inputBody = {
  object: ["integer"]
};
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/feed/read/',
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
curl -X POST /api/v2/feed/read/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  --data-raw '{
      "object": ["integer"]
  }'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Response status code|None|


