---
sidebar_label: Get Embed's Insight Metadata
sidebar_position: 1
title: Get Embed's Insight Metadata
---

This endpoint retrieves the embed's metadata insight.

## HTTP Request

`GET /api/v2/insight/embed/metadata/`

### Parameters

|Name|In|Type|Required| Description                                                    |
|---|---|---|---|----------------------------------------------------------------|
|limit|path|integer|false| Number of results to return per page.                          |
|category_id|path|integer|false| The category id.                                               |
|created_at__gte|path|string(date-time)|false| datetime of creation(greater than or equal to the given value) |
|created_at__lte|path|string(date-time)|false| datetime of creation(less than or equal to the given value)    |
|embed_type|path|string|false| The embed type                                                 |
|metadata_term|path|string|false| The metadata term to use for aggrgation                        |

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

fetch('/api/v2/insight/embed/metadata/',
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
curl -X GET /api/v2/insight/embed/metadata/ \
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

| Name         |Type|Required|Restrictions| Description                     |
|--------------|---|---|---|---------------------------------|
| count        |integer|false|none| Total results count             |
| next         |string(uri)¦null|false|none| Next page url                   |
| previous     |string(uri)¦null|false|none| Previous page url               |
| » result     |string|false|none| The aggregation result string|
| » score      |integer|false|none| The score                  |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "count": integer,
    "next": "https://apiv2.quentrix.com/api/v2/insight/embed/metadata/?limit=10",
    "previous": null,
    "results": [
        {
            "result": "string",
            "score": 856
        },
        {
            "result": "string",
            "score": 453
        },
        {
            "result": "string",
            "score": 260
        }
    ]
}
```

</TabItem>
</Tabs>
````




