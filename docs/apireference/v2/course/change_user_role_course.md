---
sidebar_label: Change User Role
sidebar_position: 1
title: Change User Role
---

This endpoint allows user managers to change the role of some users in the specified course.<br/>
At least one parameter between managers, joined and unjoined is required.

:::note

The creator of the course cannot be removed from the managers.

:::

:::info

This operation requires the course manager role.

:::

## HTTP Request

`POST /api/v2/course/{id}/role/`

### Parameters

| Name     | In   | Type          | Required | Description                                                                                          |
|----------|------|---------------|----------|------------------------------------------------------------------------------------------------------|
| id       | path | integer       | true     | A unique integer value identifying this course                                                       |
| managers | body | list(integer) | false    | List of id of [User](/docs/apireference/v2/schemas/user) to set as managers role                     |
| joined   | body | list(integer) | false    | List of id of [User](/docs/apireference/v2/schemas/user) to force to join the course as normal users |
| unjoined | body | list(integer) | false    | List of id of [User](/docs/apireference/v2/schemas/user) to force to unjoin the course               |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = '{
  "managers": ["integer"],
  "joined": ["integer"],
  "unjoined": ["integer"]  
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/course/{id}/role/',
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
curl -X POST /api/v2/course/{id}/role/ \
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
