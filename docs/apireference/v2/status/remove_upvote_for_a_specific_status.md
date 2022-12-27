---
sidebar_label: Remove an Upvote for a Specific Status
sidebar_position: 10
title: Remove an Upvote for a Specific Status
---

This endpoint removes a vote/reaction for a specific status

:::info

This operation requires authentication.

:::

## HTTP Request

`POST /api/v2/status/{id}/vote/`

### Parameters

| Name     | In    | Type   | Required | Description                                                                       |
|----------|-------|--------|----------|-----------------------------------------------------------------------------------|
| id       | path  | string | true     | A unique integer value identifying this status.                                   |
| reaction | query | string | false    | A unique integer value identifying the reaction you want to remove (default is 1) |

:::info

To remove a reaction it is necessary to pass the id of the reaction made previously by the user.

:::

:::info

If a different reaction id than the one made previously by the user is passed, the reaction is updated to the new one.

:::

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/status/{id}/vote/',
{
  method: 'POST',
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
curl -X POST /api/v2/status/{id}/vote/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                         | Description | Schema |
|--------|-----------------------------------------------------------------|-------------|--------|
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | Response status code        | None   |



