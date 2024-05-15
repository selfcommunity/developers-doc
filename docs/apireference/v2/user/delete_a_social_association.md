---
sidebar_label: Delete a social association
sidebar_position: 200
title: Delete a social association
---

:::info

This operation requires authentication and the user must be the same or must have the admin role.

:::

## HTTP Request

`DELETE /api/v2/user/{id}/provider/`

### Parameters

| Name       | In    | Type    | Required | Description                                                                                                                           |
|------------|-------|---------|----------|---------------------------------------------------------------------------------------------------------------------------------------|
| id         | query | integer | true     | A unique integer value identifying this  user                                                                                                                              |
| ext_id     | body  | integer | true     | A unique external id identifying the user                                                                                             |
| provider   | body  | string  | true     | The external provider of the ext_id                                                                                                   |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = '{
  "ext_id":  "integer",
  "provider": "string"
}';
const headers = {
  'Authorization':'Bearer {access_token}',
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/user/{id}/provider/',
{
  method: 'DELETE',
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
curl -X DELETE /api/v2/user/{id}/provider/ \
  -H 'Authorization: Bearer {access_token}'
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'
  -d '{
  "ext_id":  "integer",
  "provider": "string"
 }'
```
</TabItem>

</Tabs>

````

## Responses

| Status | Meaning                                                         | Description          | Schema |
|--------|-----------------------------------------------------------------|----------------------|--------|
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | Response status code | None   |
