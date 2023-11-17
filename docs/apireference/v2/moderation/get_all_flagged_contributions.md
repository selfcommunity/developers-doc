---
sidebar_label: Get All Flagged Contributions
sidebar_position: 3
title: Get All Flagged Contributions
---

This endpoint retrieves all flagged contributions

:::info

This operation requires moderation role.

:::

## HTTP Request

`GET /api/v2/moderation/contribution/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|min_flags|query|integer|false|Minimum number of flags received by a contribute to display it in this list|
|contribution_type|query|string|false|Valid values are: post, discussion, status, comment|
|contribution_id|query|string|false|A unique integer value identifying this Contribution|
|author|query|string|false|Username (or part of it) of the contributes' author|
|flagged_by|query|string|false|Username (or part of it) of the contributes' flagger|
|content|query|string|false|Content text (or part of it) of the contributes|
|moderation_status|query|string|false|Moderation status of the contributes flagged|
|limit|query|integer|false|Number of results to return per page|
|offset|query|integer|false|The initial index from which to return the results|
|order_by|query|string|false|Default ordering is: -last_flagged_at. Other valid fields are: flag_count, last_moderated_at|

#### Enumerated Values

|Property|Value|
|---|---|
|moderation_status|ignored|
|moderation_status|deleted|
|moderation_status|hidden|
|moderation_status|open|
|order_by|flag_count|
|order_by|-flag_count|
|order_by|last_moderated_at|
|order_by|-last_moderated_at"|
|order_by|last_flagged_at|
|order_by|-last_flagged_at|

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

fetch('/api/v2/moderation/contribution/',
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
curl -X GET /api/v2/moderation/contribution/ \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
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

|Name| Type                                                                             |Required|Restrictions|Description|
|---|----------------------------------------------------------------------------------|---|---|---|
|» count| integer                                                                          |false|none|Total results count|
|» next| string(uri)¦null                                                                 |false|none|Next page url|
|» previous| string(uri)¦null                                                                 |false|none|Previous page url|
|» results| list([Flagged Contribution](/docs/apireference/v2/schemas/flagged_contribution)) |false|none|List of results|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "count": "integer",
  "next": "string(uri)",
  "previous": "string(uri)",
  "results": [
    {
  "contribution_type": "string",
  "contribution": {
            "id": "integer",
            "author": {ModerationUser},
            "added_at": "string",      
            "categories": [
                {
                    "id": "integer,
                    "name": "string",
                    "slug": "string"
                }
            ],
            "title": "string",
            "html": "string",
            "summary": "string",
            "deleted": "boolean",
            "collapsed": "boolean",
            "parent": "integer",
            "in_reply_to": "integer",
            "comment_count": "integer",
            "vote_count": "integer",
            "reactions_count": [{Reaction}],
            "flag_count": "integer",
            "flag_count_detail": {
              "1": "integer",
              "2": "integer",
              "3": "integer",
              "4": "integer",
              "0": "integer"
            },
            "media_count_detail": {},
            "share_count": "integer",
            "has_poll": "boolean",
            "thread_id": "integer",
            "thread_type": "string",
            "thread_slug": "string"
          },
          "last_flagged_at": "string",
          "moderation_status": "string",
          "moderation_type": "string",
          "moderation_by": {User},
          "moderation_at": "string"
    }
  ]
}
```

</TabItem>
</Tabs>
````




