---
sidebar_label: Create an account
sidebar_position: 1
title: Create an account
---

This endpoint performs the creation of a new user account.

:::info

`username` field must be unique and valid (valid characters are: a-z A-Z 0-9 _\-).

:::

:::info

Only users with the admin role can register new users.

:::

:::info

This operation requires authentication and admin role.

:::

## HTTP Request

`POST /api/v2/account/create/`

### Parameters

| Name                     | In   | Type   | Required | Description                                                                                                                                                                                                                                             |
|--------------------------|------|--------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| username                 | body | string | true     | The username of the user. Max 255 characters. Letters, numbers and -/_ characters                                                                                                                                                                       |
| email                    | body | string | true     | The email of the user.                                                                                                                                                                                                                                  |
| password                 | body | string | true     | The password of the user. The password must be at least 8 characters (max 128 chararacters) and it must contains at least 3 of the following 4 types of characters: lower case letters, upper case letters, numbers and special characters (eg !@#$%^&) |
| invite_code              | body | string | false    | A valid invite code, only if 'invite_code' preference is true.                                                                                                                                                                                          |
| promo_code               | body | string | false    | A valid promo code, only if 'promo_code' feature is true.                                                                                                                                                                                               |
| custom_user_metadata (*) | body | string | false    | Custom user metadata fields can be passed only if they are defined. Refer to the following guide [User's custom fields (metadata)](/docs/apireference/v2/usermetadata/).                                                              |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

### Response Schema

| Status | Meaning                                                      | Description          | Schema                                     |
|--------|--------------------------------------------------------------|----------------------|--------------------------------------------|
| 201    | [CREATED](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [User](/docs/apireference/v2/schemas/user) |




