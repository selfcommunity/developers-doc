---
sidebar_label: Signin
sidebar_position: 1
title: Signin
---

Signin the user authenticated with the access token

:::info

This operation requires authentication.

:::

## HTTP Request

`POST /api/v2/sso/signin/`

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }, { label: 'Python', value: 'py', }]}>

<TabItem value="js">

```js
const inputBody = '{}';
const headers = {
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/sso/signin/',
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

<TabItem value="py">

```py
import requests
headers = {
  'Authorization': 'Bearer {access_token}'
}

r = requests.post('/api/v2/sso/signin/', headers = headers)

print(r.json())

```
</TabItem>

<TabItem value="bash">

```bash
# You can also use wget
curl -X POST /api/v2/sso/signin/ \
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
|» id|integer|true|none|A unique internal id identifying the authenticated user|
|» ext_id|integer¦null|true|none|A unique external id identifying the authenticated user|
|» username|string|true|none|Username of the authenticated user|
|» role|string¦null|false|none|Role of the user; it can be: admin, moderator, editor|
|» tags|[integer]¦null|false|none|List of tags id|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": 0,
  "ext_id": 0,
  "username": "string",
  "role": "string",
  "tags": [
    0
  ]
}
```

</TabItem>
</Tabs>
````




