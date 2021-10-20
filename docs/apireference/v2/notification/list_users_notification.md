---
sidebar_label: List User's Notification
sidebar_position: 1
title: List User's Notification
---

List all user notifications (in aggregate form) related to the community

:::info

Notifications include all possible interactions with other users of the community, such as replies, comments to the same post, mentions, requests for friendship etc.

:::

<!-- Example previews:

<%= image_tag "notification_types/notification_aggregate_1.png" %>

<%= image_tag "notification_types/notification_aggregate_2.png" %> -->

:::info

When calling this resource the notifications included in the list are automatically marked as read.

:::

:::info

This operation requires authentication

:::

## HTTP Request

`GET /api/v2/notification/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|next_id|query|string|false|Next page id|
|previous_id|query|string|false|Previous page id|

*if both parameters are sent previous_id takes precedence

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json',
  'Authorization: Bearer <token>'
};

fetch('/api/v2/notification/',
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
curl -X GET /api/v2/notification/ \
  -H 'Accept: application/json'
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|string¦null|false|none|Next page url|
|previous|string¦null|false|none|Previous page url|
|results|list([Notification](#schemanotification))|false|none|List of notification results|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "next": "string",
  "previous": "string",
  "results": [
    {
        "is_new": false,
        "sid": "1905252769000",
        "post": {...},
        "aggregated": [
            {
                "is_new": false,
                "sid": 16456592493610000000054923,
                "type": "comment",
                "active_at": "2020-10-26T15:55:05.984561+01:00",
                "comment": {...}

            },
            {
                "is_new": false,
                "sid": 18952592493610000000055990,
                "type": "nested_comment",
                "active_at": "2020-10-25T15:30:01.982831+01:00",
                "comment": {...}
            }
        ]
    },
    {
       "is_new": false,
       "sid": "1435259289000",
       "aggregated": [
            {
              "is_new": false,
              "type": "connection_accept",
              "sid": 13452592763610000000054490,
              "active_at": "2020-10-23T12:20:03.982632+01:00",
              "accept_user": {...}
            }
       ]
    }
  ]
}
```

</TabItem>
</Tabs>
````


#### Notification types:

Type | Description | Audience
-------------- | -------------- | --------------
comment* | comment of first level | participants of the discussion/post, including those who follow the post
nested_comment* | comment of second level | author of the top-level comment (unless the user has hidden it) and the authors of the siblings comments
mention* | user mention | who is mentioned in the contribute
vote_up* | vote up a post/discussion/status/comment | who received the voteup
follow* | follow a post/discussion/status | author of the content (discussion/post/status)
private_message* | private message | recipient of the message
deleted_for_advertising | deleted content by moderators with motivation the content is advertising | author of the contribute
deleted_for_aggressive | deleted content by moderators with motivation the content is aggressive | author of the contribute
deleted_for_vulgar | deleted content by moderators with motivation the content is vulgar | author of the contribute
deleted_for_poor | deleted content by moderators with motivation the content is poor | author of the contribute
deleted_for_offtopic | deleted content by moderators with motivation the content is offtopic | author of the contribute
undeleted_for | the content has been rehabilitated by the moderators | author of the contribute
collapsed_for_advertising | only for comments, hidden content by moderator with motivation the content is advertising | author of the contribute
collapsed_for_aggressive | only for comments, hidden content by moderator with motivation the content is aggressive | author of the contribute
collapsed_for_vulgar | only for comments, hidden content by moderator with motivation the content is vulgar | author of the contribute
collapsed_for_poor | only for comments, hidden content by moderator with motivation the content is poor | author of the contribute
collapsed_for_offtopic | only for comments, hidden content by moderator with motivation the content is offtopic | author of the contribute
connection_request | connect request | user who receives the request
connection_accept | connection accept | who had requested friendship
user_follow | follow user | user followed
kindly_notice_advertising | content author notified for advertising content (via moderation) | author of the contribute
kindly_notice_aggressive | content author notified for advertising content (via moderation) | author of the contribute
kindly_notice_vulgar | content author notified for advertising content (via moderation) | author of the contribute
kindly_notice_poor | content author notified for advertising content (via moderation) | author of the contribute
kindly_notice_offtopic | content author notified for advertising content (via moderation) | author of the contribute
kindly_notice_flag | flag author notified for bad flagging (via moderation) | author of the flag
blocked_user | user blocked | blocked user
unblocked_user | user unblocked | unblocked user
custom_notification | custom notification | user followers/connections

*notifications of this type, if chronologically consecutive, can be aggregated

