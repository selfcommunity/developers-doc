---
sidebar_label: Upvote for a Specific Poll Choice
sidebar_position: 14
title: Upvote for a Specific Poll Choice
---

This endpoint upvotes a specific poll choice in a discussion.

:::info

If the discussion has no poll associated the response status code is [404](https://tools.ietf.org/html/rfc7231#section-6.5.4).

:::

:::info

This operation requires authentication

:::

## HTTP Request

`POST /api/v2/discussion/{id}/poll/vote/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this discussion|
|choice|body|integer|true|A unique integer value identifying the choice to be upvoted|

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = {
   "choice": "integer"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/discussion/{id}/poll/vote/',
{
  method: 'POST',
  headers: headers,
  body: inputBody
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
curl -X POST /api/v2/discussion/{id}/poll/vote/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
  --data-raw '{
    "choice": "integer"
  }'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Response status code|None|




