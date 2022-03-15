---
sidebar_label: Create an Incubator
sidebar_position: 4
title: Create an Incubator
---

This endpoint creates an incubator.


:::info

This operation requires authentication.

:::


## HTTP Request

`POST /api/v2/incubator/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|body|string|true|A unique name for this incubator|
|slug|body|string|false|A unique slug (url valid string) for this incubator|
|slogan|body|string|false|A short text|

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js

const inputBody = '{
  "name": "string",
  "slug": "string",
  "slogan": "string"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json'
};

fetch('/api/v2/incubator/',
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

curl -X POST /api/v2/incubator/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
--data-raw '{
  "name": "string",
  "slug": "string",
  "slogan": "string"
}'  
```
</TabItem>
</Tabs>
````
## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Successfully created|[Incubator](../schemas/incubator)|

### Example responses

````mdx-code-block

<Tabs defaultValue="201" values={[{ label: '201', value: '201', }]}>
<TabItem value="201">

```json
{
  "id": 0,
  "slug": "string",
  "slogan": "string",
  "status": 0,
  "approved_category": {},
  "added_at": "2019-08-24T14:15:22Z",
  "user": {},
  "subscribers_count": "string",
  "subscribers_threshold": "string",
  "subscribed": true
}
```

</TabItem>
</Tabs>
````




