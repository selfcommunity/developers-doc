---
sidebar_label: Recover an account
sidebar_position: 1
title: Recover an account
---

Using this endpoint the user will receive an email with the link to reset his password.
The link contains a validation_code which can be used in the next call to reset the password.

`eg: http://[...]/account/recover/password?validation_code=d73832396a1b0c2511cf166147a3e2440a&next=/`

:::info

This operation does not require authentication.

:::

## HTTP Request

`POST /api/v2/account/recover/`

### Parameters

| Name     | In   | Type           | Required | Description                                                |
|----------|------|----------------|----------|------------------------------------------------------------|
| email    | body | string         | true     | The email of the user of whom we have to recover password. |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = '{
  "email": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/account/recover/',
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
curl -X POST /api/v2/account/recover/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'
  -d '{
    "email": "string"
 }'
```
</TabItem>

</Tabs>

````

## Responses

| Status | Meaning                                                         | Description | Schema |
|--------|-----------------------------------------------------------------|-------------|--------|
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | none        | None   |

