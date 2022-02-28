---
sidebar_label: Get Best Users Insight
sidebar_position: 1
title: Get Best Users Insight
---

This endpoint retrieves the best users insights list.

## HTTP Request

`GET /api/v2/insight/user/`

### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|path|integer|false|Number of results to return per page.|
|category_id|path|integer|false|The category id.|
|created_at__gte|path|string(date-time)|false|datetime of creation(greater than or equal to the given value)|
|created_at__lte|path|string(date-time)|false|datetime of creation(less than or equal to the given value)|

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

fetch('/api/v2/insight/user/',
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
curl -X GET /api/v2/insight/user/ \
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
|» count|integer|false|none|Total results count|
|» next|string(uri)¦null|false|none|Next page url|
|» previous|string(uri)¦null|false|none|Previous page url|
|» results|list|false|none|List of results|
|user_id|integer|false|none|The user id|
|score|integer|false|none|The user score|

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "count": 560,
    "next": "https://apiv2.quentrix.com/api/v2/insight/user/?limit=20&offset=20",
    "previous": null,
    "results": [
        {
            "user_id": 606,
            "score": 52902
        },
        {
            "user_id": 116,
            "score": 48445
        },
        {
            "user_id": 165,
            "score": 41951
        }
        ]
}
```

</TabItem>
</Tabs>
````




