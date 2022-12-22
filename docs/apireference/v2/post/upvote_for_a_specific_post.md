---
sidebar_label: Upvote for a Specific Post
sidebar_position: 9
title: Upvote for a Specific Post
---

This endpoint upvotes (with a relative reaction) a specific post

:::info

This operation requires authentication.

:::

## HTTP Request

`POST /api/v2/post/{id}/vote/`

### Parameters

| Name     | In    | Type   | Required | Description                                                    |
|----------|-------|--------|----------|----------------------------------------------------------------|
| id       | path  | string | true     | A unique integer value identifying this post.                  |
| reaction | query | string | false    | A unique integer value identifying the reaction (default is 1) |

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

fetch('/api/v2/post/{id}/vote/?reaction=1',
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
curl -X POST /api/v2/post/{id}/vote/?reaction=1 \
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
| 204    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | none        | None   |





