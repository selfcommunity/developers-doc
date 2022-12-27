---
sidebar_label: Get Embed's Insight Counters
sidebar_position: 1
title: Get Embed's Insight Counters
---

This endpoint retrieves a specific embed's insight counters.

## HTTP Request

`GET /api/v2/insight/embed/counters/`

### Parameters

|Name|In|Type|Required| Description                                                                                          |
|---|---|---|---|------------------------------------------------------------------------------------------------------|
| category_id     |path| string            |false| Can be a single category id or list (comma separated) of categories ids. 0 means empty (no category) |
|created_at__gte|path|string(date-time)|false| Datetime of creation(greater than or equal to the given value)                                       |
|created_at__lte|path|string(date-time)|false| Datetime of creation(less than or equal to the given value)                                          |
|embed_type|path|string|false| The embed type                                                                                       |
|embed_id|path|string|false| The embed id                                                                                         |

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

fetch('/api/v2/insight/embed/counters/',
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
curl -X GET /api/v2/insight/embed/counters/ \
  -H 'Accept: application/json' \
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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|num_contributes|integer|false|none|The number of contributes|
|num_comments|integer|false|none|The number of comments|
|num_votes|integer|false|none|The number of votes|
|num_clicks|integer|false|none|The number of clicks|
|num_shares|integer|false|none|The number of shares|


### Example responses


```json
{
    "num_contributes": "integer",
    "num_comments": "integer",
    "num_votes": "integer",
    "num_clicks": "integer",
    "num_shares": "integer"
}
```



