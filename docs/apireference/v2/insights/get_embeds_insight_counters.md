---
sidebar_label: Get Embed's Insight Counters
sidebar_position: 1
title: Get Embed's Insight Counters
---

This endpoint retrieves a specific embed's insight counters.

## HTTP Request

`GET /api/v2/insight/embed/counters/?embed_type=$(type)&embed_id=$(id)`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|path|integer|false|Number of results to return per page.|
|category_id|path|integer|false|The category id.|
|created_at__gte|path|string(date-time)|false|datetime of creation(greater than or equal to the given value)|
|created_at__lte|path|string(date-time)|false|datetime of creation(less than or equal to the given value)|
|embed_type|path|string|false|The embed type|
|embed_id|path|string|false|The embed id|

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

fetch('/api/v2/insight/embed/counters/?embed_type=$(type)&embed_id=$(id)',
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
curl -X GET /api/v2/insight/embed/counters/?embed_type=$(type)&embed_id=$(id) \
  -H 'Accept: application/json' \
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
|num_contributes|integer|false|none|The number of contributes|
|num_comments|integer|false|none|The number of comments|
|num_votes|integer|false|none|The number of votes|
|num_clicks|integer|false|none|The number of clicks|
|num_shares|integer|false|none|The number of shares|


### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "num_contributes": 0,
    "num_comments": 0,
    "num_votes": 0,
    "num_clicks": 0,
    "num_shares": 0
}
```

</TabItem>
</Tabs>
````




