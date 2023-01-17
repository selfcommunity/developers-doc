---
sidebar_label: Check email token
sidebar_position: 41
title: Check email token
---

This endpoint checks an email token typically received in the unsubscribe/settings link of an email.

:::info

This operation does not require authentication.

:::

:::info

Being an unauthenticated api call, it is possible to check the token, after clicking the link in the email, even anonymously. If the check will answer true, it will be possible, for example, to render a page for managing the email reception settings and subsequently call the [user settings update](/docs/apireference/v2/user/change_users_settings) endpoint.

:::

## HTTP Request

`GET /api/v2/user/{id}/check_email_token/`

### Parameters

| Name  | In    | Type   | Required | Description                                                              |
|-------|-------|--------|----------|--------------------------------------------------------------------------|
| id    | path  | string | true     | A unique integer value identifying the current user id.                  |
| token | query | string | true     | A token typically received in the unsubscribe/settings link of an email. |


### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/user/{id}/check_email_token/?token={token}',
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
curl -X GET /api/v2/user/{id}/check_email_token/?token={token} \
  -H 'Accept: application/json' \
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema |
|--------|---------------------------------------------------------|----------------------|--------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | Inline |

### Response Schema

Status Code **200**

| Name     | Type                                             | Description          |
|----------|--------------------------------------------------|----------------------|
| is_valid | boolean                                          | Is this token valid? |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "is_valid": "boolean"
}
```

</TabItem>
</Tabs>
````




