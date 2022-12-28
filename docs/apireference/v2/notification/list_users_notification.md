---
sidebar_label: List User's Notification
sidebar_position: 1
title: List User's Notification
---

List all user notifications (in aggregate form) related to the community

:::info

Notifications include all possible interactions with other users of the community, such as replies, comments to the same post, mentions, requests for friendship etc.

:::

Example previews:

![Notification](/img/notification_types/notification_aggregate_1.png)

![Notification](/img/notification_types/notification_aggregate_2.png)

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code|Inline|

### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|string¦null|false|none|Next page url|
|previous|string¦null|false|none|Previous page url|
|results|list([Notification](/docs/apireference/v2/schemas/notification))|false|none|List of notification results|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "next": "string(uri)",
  "previous": "string(uri)",
  "results": [
    {
        "is_new": "boolean",
        "sid": "string",
        "post": {...},
        "aggregated": [
            {
              "is_new": "boolean",
              "sid": "string",
              "type": "string",
              "active_at": "string",
              "comment": {...}

            },
            {...}
        ]
    },
    {
       "is_new": "boolean",
       "sid": "string",
       "aggregated": [
            {
              "is_new": "boolean",
              "sid": "string",
              "type": "string",
              "active_at": "string",
              "follower": {...}
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

| Type                      | Description                                                                               | Audience                                                                                                 |
|---------------------------|-------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
 | comment*                  | Comment of first level                                                                    | Participants of the discussion/post, including those who follow the post                                 |
 | nested_comment*           | Comment of second level                                                                   | Author of the top-level comment (unless the user has hidden it) and the authors of the siblings comments |
 | mention*                  | User mention                                                                              | Who is mentioned in the contribute                                                                       |
| vote_up*                  | Vote up a post/discussion/status/comment                                                  | Who received the voteup                                                                                  |
 | follow*                   | Follow a post/discussion/status                                                           | Author of the content (discussion/post/status)                                                           |
 | private_message*          | Private message                                                                           | Recipient of the message                                                                                 |
 | deleted_for_advertising   | Deleted content by moderators with motivation the content is advertising                  | Author of the contribute                                                                                 |
 | deleted_for_aggressive    | Deleted content by moderators with motivation the content is aggressive                   | Author of the contribute                                                                                 |
 | deleted_for_vulgar        | Deleted content by moderators with motivation the content is vulgar                       | Author of the contribute                                                                                 |
 | deleted_for_poor          | Deleted content by moderators with motivation the content is poor                         | Author of the contribute                                                                                 |
 | deleted_for_offtopic      | Deleted content by moderators with motivation the content is offtopic                     | Author of the contribute                                                                                 |
 | undeleted_for             | the content has been rehabilitated by the moderators                                      | Author of the contribute                                                                                 |
 | collapsed_for_advertising | Only for comments, hidden content by moderator with motivation the content is advertising | Author of the contribute                                                                                 |
 | collapsed_for_aggressive  | Only for comments, hidden content by moderator with motivation the content is aggressive  | Author of the contribute                                                                                 |
 | collapsed_for_vulgar      | Only for comments, hidden content by moderator with motivation the content is vulgar      | Author of the contribute                                                                                 |
 | collapsed_for_poor        | Only for comments, hidden content by moderator with motivation the content is poor        | Author of the contribute                                                                                 |
 | collapsed_for_offtopic    | Only for comments, hidden content by moderator with motivation the content is offtopic    | Author of the contribute                                                                                 |
 | connection_request        | Connect request                                                                           | User who receives the request                                                                            |
 | connection_accept         | Connection accept                                                                         | Who had requested friendship                                                                             |
 | user_follow               | Follow user                                                                               | User followed                                                                                            |
 | kindly_notice_advertising | Content author notified for advertising content (via moderation)                          | Author of the contribute                                                                                 |
 | kindly_notice_aggressive  | Content author notified for advertising content (via moderation)                          | Author of the contribute                                                                                 |
| kindly_notice_vulgar      | Content author notified for advertising content (via moderation)                          | Author of the contribute                                                                                 |
| kindly_notice_poor        | Content author notified for advertising content (via moderation)                          | Author of the contribute                                                                                 |
| kindly_notice_offtopic    | Content author notified for advertising content (via moderation)                          | Author of the contribute                                                                                 |
| kindly_notice_flag        | Flag author notified for bad flagging (via moderation)                                    | Author of the flag                                                                                       |
| blocked_user              | User blocked                                                                              | Blocked user                                                                                             |
| unblocked_user            | User unblocked                                                                            | Unblocked user                                                                                           |
| custom_notification       | Custom notification                                                                       | User followers/connections                                                                               |

*notifications of this type, if chronologically consecutive, can be aggregated

