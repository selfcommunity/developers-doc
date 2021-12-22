---
sidebar_label: Get List of Contributors for a Specific Status
sidebar_position: 8
title: Get List of Contributors for a Specific Status
---

This endpoint retrieves all contributors for a specific status

:::info

This operation requires authentication only if `content_availability` community option is false.

:::

## HTTP Request

`GET /api/v2/status/{id}/contributors/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique integer value identifying this status.|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

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

fetch('/api/v2/status/{id}/contributors/',
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
curl -X GET /api/v2/status/{id}/contributors/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» count|integer|true|none|Total results count|
|» next|string¦null|false|none|Next page url|
|» previous|string¦null|false|none|Previous page url|
|» results|list([User](/docs/apireference/v2/schemas/user))|true|none|List of results|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "count": 123,
  "next": "string",
  "previous": "string",
  "results": [
        {
            "id": 123,
            "username": "string",
            "real_name": "string",
            "avatar": "url",
            "ext_id": "string",
            "connection_requests_sent_counter": 0,
            "connection_requests_received_counter": 0,
            "connections_counter": 0,
            "followings_counter": 3,
            "followers_counter": 4,
            "posts_counter": 4,
            "discussions_counter": 0,
            "statuses_counter": 0,
            "polls_counter": 1,
            "connection_status": "string"     
        },
        {
            "id": 123,
            "username": "string",
            "real_name": "string",
            "avatar": "url",
            "ext_id": "string",
            "connection_requests_sent_counter": 0,
            "connection_requests_received_counter": 0,
            "connections_counter": 0,
            "followings_counter": 3,
            "followers_counter": 4,
            "posts_counter": 4,
            "discussions_counter": 0,
            "statuses_counter": 0,
            "polls_counter": 1,
            "connection_status": "string"     
        },
  ]
}
```

</TabItem>
</Tabs>
````




