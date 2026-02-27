---
sidebar_label: Signup
sidebar_position: 1
title: Signup
---

Creates a new account

:::info

`username` field must be unique and valid (valid characters are: a-z A-Z 0-9 _\-).

:::

:::info

Only users with the admin role can register new users.

:::

:::info

This operation requires admin role.

:::

## HTTP Request

`POST /api/v2/sso/signup/`

### Parameters

| Name          | In   | Type               | Required | Description                                                                                                                                                                                                                                                                                                                        |
|---------------|------|--------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ext_id        | body | string             | false    | A unique external id identifying the user in the **external service**. By **external service**, we mean any generic service that is **not** a provider officially certified by SelfCommunity. To add a **certified external provider**, use: [Create a social association](/docs/apireference/v2/user/create_a_social_association) |
| username      | body | string             | true     | The username of the user. Max 255 characters. Letters, numbers and -/_ characters                                                                                                                                                                                                                                                  |
| real_name     | body | string             | false    | Real name. Max 255 character.                                                                                                                                                                                                                                                                                                      |
| email         | body | string             | false    | The email of the user.                                                                                                                                                                                                                                                                                                             |
| password      | body | string             | false    | The password of the user. If passed, the password must be at least 8 characters (max 128 chararacters) and it must contains at least 3 of the following 4 types of characters: lower case letters, upper case letters, numbers and special characters (eg !@#$%^&)                                                                 |
| avatar_base64 | body | string             | false    | The avatar of the user passed as a base4 string file.                                                                                                                                                                                                                                                                              |
| avatar        | body | url                | false    | The source url to fetch the avatar of the user in alternative to avatar_base64                                                                                                                                                                                                                                                     |
| role          | body | string¦null        | false    | Role of the user; it can be: admin, moderator, editor                                                                                                                                                                                                                                                                              |
| tags          | body | list(integer)¦null | false    | List of tags id                                                                                                                                                                                                                                                                                                                    |

:::info

avatar_base64 example:

image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=

:::

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }, { label: 'YAML', value: 'yaml', }]}>
<TabItem value="json">

```json
{
  "ext_id": "string",
  "username": "string",
  "role": "string",
  "tags": ["integer"]
}
```
</TabItem>

<TabItem value="yaml">

```yaml
ext_id: string
username: string
role: string
tags:
  - "integer"
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
  "ext_id": "string"
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
    "ext_id": "string"
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
payload = '{"username": "string","ext_id": "string"}'

r = requests.post('/api/v2/sso/signup/', headers = headers, data = payload)

print(r.json())
```

</TabItem>
</Tabs>

````

## Responses

| Status | Meaning                                                      | Description          | Schema |
|--------|--------------------------------------------------------------|----------------------|--------|
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Response status code | Inline |

### Response Schema

Status Code **201**

| Name     | Type             | Required | Restrictions | Description                                           |
|----------|------------------|----------|--------------|-------------------------------------------------------|
| id       | integer          | true     | none         | The unique internal id associated to the created user |
| ext_id   | string¦null      | true     | none         | A unique external id identifying the user             |
| username | string           | true     | none         | Username of the registered user                       |
| email    | string           | false    | none         | Email of the registered user                          |
| role     | string¦null      | false    | none         | Role of the user; it can be: admin, moderator, editor |
| tags     | ["integer"]¦null | false    | none         | List of tags id                                       |
| avatar   | url              | false    | none         | The absolute url of the avatar after creation         |

### Example responses

````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": "integer",
  "ext_id": "string",
  "username": "string",
  "role": "string",
  "tags": ["integer"],
  "avatar": "url"
}
```

</TabItem>
</Tabs>
````




