---
sidebar_label: Get All Webhook Events
sidebar_position: 2
title: Get All Webhook Events
---

This endpoint retrieves [webhook events](#list-of-events) that can be enabled in the endpoint

:::info

This operation requires authentication and admin role.
:::

## HTTP Request

`GET /api/v2/webhook/endpoint/event/`

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/webhook/endpoint/event/',
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
curl -X GET /api/v2/webhook/endpoint/event/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Endpoint](#schemaendpoint)|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
[
    "comment.created",
    "comment.updated",
    "comment.deleted",
    "comment.restored",
    "category.follow",
    "category.unfollow",
    "connection_request.created",
    "connection_request.rejected",
    "connection_request.restored",
    "connection_request.cancelled",
    "connection.created",
    "connection.deleted",
    "connection.follow",
    "connection.unfollow",
    "discussion.created",
    "discussion.updated",
    "discussion.deleted",
    "discussion.follow",
    "discussion.unfollow",
    "discussion.restored",
    "poll_vote.created",
    "poll_vote.deleted",
    "post.created",
    "post.updated",
    "post.deleted",
    "post.restored",
    "user.created",
    "user.updated",
    "user.deleted",
    "user.settings_updated",
    "vote.created",
    "vote.deleted",
    "user.score_updated",
    "user.loyalty_points_updated",
    "loyalty.prize.created",
    "loyalty.prize.updated",
    "loyalty.prize_request.created",
    "loyalty.prize_request.updated"
]
```

</TabItem>
</Tabs>
````




