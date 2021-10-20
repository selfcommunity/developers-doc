---
sidebar_label: Signup
sidebar_position: 2
title: Signup
---

Creates a new account

:::info

`username` field must be unique and valid (valid characters are: a-z A-Z 0-9 _\-).

:::

:::info

only users with the admin role can register new users.

:::

:::info

This operation requires authentication and admin role.

:::

## HTTP Request

`POST /api/v2/sso/signup/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ext_id|body|integer|true|A unique external id identifying the user|
|username|body|string|true|The username of the user. Max 255 characters. Letters, numbers and -/_ characters|
|email|body|string|false|The email of the user.|
|password|body|string|false|The password of the user. If passed, the password must be at least 8 characters (max 128 chararacters) and it must contains at least 3 of the following 4 types of characters: lower case letters, upper case letters, numbers and special characters (eg !@#$%^&).|
|role|body|string¦null|false|Role of the user; it can be: admin, moderator, editor|
|tags|body|[integer]¦null|false|List of tags id|

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }, { label: 'YAML', value: 'yaml', }]}>
<TabItem value="json">

```json
{
  "ext_id": 0,
  "username": "string",
  "role": "string",
  "tags": [
    0
  ]
}
```
</TabItem>

<TabItem value="yaml">

```yaml
ext_id: 0
username: string
role: string
tags:
  - 0
```

</TabItem>
</Tabs>
````

### Example Request

````mdx-code-block

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }, { label: 'Python', value: 'py', }]}>
<TabItem value="js">

```js
const inputBody = '{
  "username": "string",
  "ext_id": 0
}';
const headers = {
  'Authorization':'Bearer {access_token}',
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/sso/signup/',
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
curl -X POST /api/v2/sso/signup/ \
  -H 'Authorization: Bearer {access_token}'
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'
  -d '{
    "username": "string",
    "ext_id": 0
 }'
```
</TabItem>


<TabItem value="py">

```py
import requests
headers = {
  'Authorization': 'Bearer {access_token}',
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}
payload = '{"username": "string","ext_id": 0}'

r = requests.post('/api/v2/sso/signup/', headers = headers, data = payload)

print(r.json())
```

</TabItem>
</Tabs>

````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### Response Schema

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|integer|true|none|The unique internal id associated to the created user|
|» ext_id|integer¦null|true|none|A unique external id identifying the user|
|» username|string|true|none|Username of the registered user|
|» email|string|false|none|Email of the registered user|
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




