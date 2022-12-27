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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code|[Endpoint](/docs/apireference/v2/schemas/endpoint)|

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
    "discussion.restored",
    "discussion.follow",
    "discussion.unfollow",
    "discussion.suspend",
    "discussion.unsuspend",
    "poll_vote.created",
    "poll_vote.deleted",
    "post.created",
    "post.updated",
    "post.deleted",
    "post.restored",
    "post.follow",
    "post.unfollow",
    "post.suspend",
    "post.unsuspend",
    "status.created",
    "status.updated",
    "status.deleted",
    "status.restored",
    "status.follow",
    "status.unfollow",
    "status.suspend",
    "status.unsuspend",
    "user.created",
    "user.updated",
    "user.deleted",
    "user.settings_updated",
    "user.score_updated",
    "user.loyalty_points_updated",
    "loyalty.prize.created",
    "loyalty.prize.updated",
    "loyalty.prize_request.created",
    "loyalty.prize_request.updated",
    "vote.created",
    "vote.deleted",
    "notification.banner.sent",
    "notification.comment",
    "notification.nested_comment",
    "notification.mention",
    "notification.vote_up",
    "notification.follow",
    "notification.private_message",
    "notification.deleted_for_advertising",
    "notification.deleted_for_aggressive",
    "notification.deleted_for_vulgar",
    "notification.deleted_for_poor",
    "notification.deleted_for_offtopic",
    "notification.undeleted_for",
    "notification.collapsed_for_advertising",
    "notification.collapsed_for_aggressive",
    "notification.collapsed_for_vulgar",
    "notification.collapsed_for_poor",
    "notification.collapsed_for_offtopic",
    "notification.connection_request",
    "notification.connection_accept",
    "notification.user_follow",
    "notification.kindly_notice_advertising",
    "notification.kindly_notice_aggressive",
    "notification.kindly_notice_vulgar",
    "notification.kindly_notice_poor",
    "notification.kindly_notice_offtopic",
    "notification.blocked_user",
    "notification.unblocked_user",
    "notification.custom_notification"
]
```

</TabItem>
</Tabs>
````




