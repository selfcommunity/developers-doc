---
sidebar_label: Invite Users Or Accept Users
sidebar_position: 1
title: Invite Users Or Accept Users
---

This endpoint allows user managers to invite or accept users to the course

:::info

This operation requires the course manager role.

:::

## HTTP Request

`POST /api/v2/course/{id}/invite/`

### Parameters

| Name  | In   | Type          | Required | Description                                                                     |
|-------|------|---------------|----------|---------------------------------------------------------------------------------|
| id    | path | string        | true     | A unique integer value identifying this course                                  |
| users | body | list(integer) | true     | List of id of [User](/docs/apireference/v2/schemas/user) to invite or to accept |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = '{
  "users": ["integer"]
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/course/{id}/invite/',
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
curl -X POST /api/v2/course/{id}/invite/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                         | Description          | Schema |
|--------|-----------------------------------------------------------------|----------------------|--------|
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | Response status code | None   |
