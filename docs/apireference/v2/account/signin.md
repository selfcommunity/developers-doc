---
sidebar_label: Signin
sidebar_position: 1
title: Signin
---

Signin a user

:::info

This operation does not require authentication

:::

## HTTP Request

`POST /api/v2/account/signin/`

### Parameters

| Name     | In   | Type   | Required | Description               |
|----------|------|--------|----------|---------------------------|
| username | body | string | true     | The username of the user. |
| password | body | string | true     | The password of the user. |

### Example Request

````mdx-code-block

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = '{
  "username": "string",
  "password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/account/signin/',
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
curl -X POST /api/v2/account/signin/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'
  -d '{
    "username": "string",
    "password": "string"
 }'
```
</TabItem>

</Tabs>

````

## Responses

| Status | Meaning                                                 | Description | Schema |
|--------|---------------------------------------------------------|-------------|--------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline |

### Response Schema

Status Code **200**

| Name  | Type       | Restrictions | Description  |
|-------|------------|--------------|--------------|
| token | dictionary | none         | Token fields |

### Example responses

````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "token": {
        "access_token": "string",
        "expires_in": "604800",
        "token_type": "string",
        "refresh_token": "string",
        "client_id": "string",
        "scope": "string"
    }
}
```

</TabItem>
</Tabs>
````
