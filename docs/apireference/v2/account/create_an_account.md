---
sidebar_label: Create an account
sidebar_position: 1
title: Create an account
---

Create a new user account

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

`POST /api/v2/account/create/`

### Parameters

| Name     | In   | Type           | Required | Description                                                                                                                                                                                                                                              |
|----------|------|----------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| username | body | string         | true     | The username of the user. Max 255 characters. Letters, numbers and -/_ characters                                                                                                                                                                        |
| email    | body | string         | false    | The email of the user.                                                                                                                                                                                                                                   |
| password | body | string         | false    | The password of the user. The password must be at least 8 characters (max 128 chararacters) and it must contains at least 3 of the following 4 types of characters: lower case letters, upper case letters, numbers and special characters (eg !@#$%^&). |

### Example Request

````mdx-code-block

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = '{
  "username": "string",
  "email": "string",
  "password": "string"
}';
const headers = {
  'Authorization':'Bearer {access_token}',
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/account/create/',
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
curl -X POST /api/v2/account/create/ \
  -H 'Authorization: Bearer {access_token}'
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'
  -d '{
    "username": "string",
    "email": "string",
    "password": "string"
 }'
```
</TabItem>

</Tabs>

````

## Responses

| Status | Meaning                                                      | Description | Schema |
|--------|--------------------------------------------------------------|-------------|--------|
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | none        | Inline |

### Response Schema

Status Code **201**

| Name     | Type    | Restrictions | Description                                           |
|----------|---------|--------------|-------------------------------------------------------|
| id       | integer | none         | The unique internal id associated to the created user |
| username | string  | none         | Username of the registered user                       |
| email    | string  | none         | Email of the registered user                          |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": 0,
  "username": "string",
  "email": "string"
}
```

</TabItem>
</Tabs>
````




