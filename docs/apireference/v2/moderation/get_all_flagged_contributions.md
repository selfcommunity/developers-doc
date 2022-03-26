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
|min_flags|query|integer|false|Minimum number of flags received by a contribute to display it in this list.|
|contribution_type|query|string|false|Valid values are: post, discussion, status, comment|
|contribution_id|query|string|false|A unique integer value identifying this Contribution.|
|author|query|string|false|Username (or part of it) of the contributes' author|
|flagged_by|query|string|false|Username (or part of it) of the contributes' flagger|
|content|query|string|false|Content text (or part of it) of the contributes|
|moderation_status|query|string|false|Moderation status of the contributes flagged|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|false|none|Total results count|
|» next|string(uri)¦null|false|none|Next page url|
|» previous|string(uri)¦null|false|none|Previous page url|
|» results|[[FlaggedContribution](/docs/apireference/v2/schemas/flagged_contribution)]|false|none|none|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "count": 123,
  "next": "string(uri)",
  "previous": "string(uri)",
  "results": [
    {
      "contribute_type": "string",
      "contribute": {
        "id": 0,
        "author": {
          "id": 0,
          "username": "string",
          "real_name": "string",
          "date_joined": "2019-08-24T14:15:22Z",
          "bio": "string",
          "location": "string",
          "location_lat_lng": "string",
          "position_lat_lng": "string",
          "date_of_birth": "2019-08-24",
          "description": "string",
          "gender": "Male",
          "website": "https://example.com",
          "avatar": "string",
          "cover": "string",
          "ext_id": "string",
          "tags": [
            {
              "id": 0,
              "active": true,
              "type": "user",
              "name": "string",
              "description": "string",
              "color": "string",
              "visible": true,
              "deleted": true,
              "created_at": "2019-08-24T14:15:22Z"
            }
          ]
        },
        "added_at": "2019-08-24T14:15:22Z",      
        "categories": [
            {
                "id": 0,
                "name": "string",
                "slug": "string"
            }
        ],
        "title": "string",
        "html": "string",
        "summary": "string",
        "deleted": true,
        "collapsed": true,
        "parent": "string",
        "in_reply_to": "string",
        "comment_count": 0,
        "vote_count": 0,
        "flag_count": 6,
        "flag_count_detail": {
            "0": 1,
            "2": 5
        },
        "media_count_detail": {},
        "has_poll": false,
        "thread_id": 0,
        "thread_type": "string"
      },
      "last_flagged_at": "2019-08-24T14:15:22Z",
      "moderation_status": "string",
      "moderation_type": "0",
      "moderation_by": {
          "id": 0,
          "username": "string",
          "real_name": "",
          "avatar": "url",
          "ext_id": null,
          "tags": []
      },
      "moderation_at": "2021-07-07T12:20:12.472485+02:00"
    }
  ]
}
```

</TabItem>
</Tabs>
````




