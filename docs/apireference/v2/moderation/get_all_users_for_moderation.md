---
sidebar_label: Get All Users for Moderation
sidebar_position: 1
title: Get All Users for Moderation
---

This endpoint retrieves all users for moderation purpose

:::info

This operation requires moderation role.

:::


## HTTP Request

`GET /api/v2/moderation/user/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|A search term|
|status|query|string|false|Valid values are: a, b, d, u|
|days_blocked|query|string|false|"days" or "forever"|
|limit|query|integer|false|Number of results to return per page|
|offset|query|integer|false|The initial index from which to return the results|
|order_by|query|string|false|Default ordering is: -date_joined. Other valid fields are: expire_at, blocked_at|

#### Enumerated Values

|Property|Value|Description|
|---|---|---|
|status|a|active|
|status|b|blocked|
|status|d|deleted|
|status|u|unregistered (hard deleted user)|

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

fetch('/api/v2/moderation/user/',
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
curl -X GET /api/v2/moderation/user/ \
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
|» count|integer|false|none|none|
|» next|string(uri)¦null|false|none|none|
|» previous|string(uri)¦null|false|none|none|
|» results|[[ModerationUser](/docs/apireference/v2/schemas/moderation_user)]|false|none|none|

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
          "...User": {},
          "blocked_at": "string",
          "days_blocked": "integer",
          "expire_at": "string",
          "last_seen": "string",
          "flags_given": "integer",
          "flags_received": "integer",
          "last_score_variation": {
            "score": "integer",
            "comment": "string",
            "reputed_at": "string",
            "created_by": {}
          }  
        }
  ]
}
```

</TabItem>
</Tabs>
````




