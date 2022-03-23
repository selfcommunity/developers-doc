---
sidebar_label: Get Best Embed Insight
sidebar_position: 1
title: Get Best Embed Insight
---

This endpoint retrieves the best embed insights list.
The operations of this endpoint is quite complex and returns different result structures based on the parameters passed.
For example, pagination (and therefore the use of the offset parameter) is guaranteed only if the metadata and gropu_by parameter are not passed.
If you are passing metadata you MUST pass also group_by.

## HTTP Request

`GET /api/v2/insight/embed/`

### Parameters

| Name            |In| Type             |Required| Description                                                                                                                                                                                                 |
|-----------------|---|------------------|---|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| limit           |path| integer          |false| Number of results to return per page.                                                                                                                                                                       |
| offset          |path| integer          |false| The initial index from which to return the results (only if pagination is guaranteed).                                                                                                                      |
| category_id     |path| integer          |false| Can be a single category id or list (comma separated) of categories ids. 0 means empty (no category).                                                                                                       |
| created_at__gte |path| string(date-time) |false| datetime of creation(greater than or equal to the given value)                                                                                                                                              |
| created_at__lte |path| string(date-time) |false| datetime of creation(less than or equal to the given value)                                                                                                                                                 |
| embed_type      |path| string           |false| The embed type (custom)                                                                                                                                                                                     |
| ranked_by       |path| string           |false| The rank value to use: num_posts, num_comments, num_votes, num_clicks, num_shares  (default: rank function). If a list (eg: num_posts, num_comments) the final rank will be the sum of the list components. |
| group_by        |path| string           |false| embed_id, embed_type or metadata.TERM_KEY                                                                                                                                                                   |
| metadata        |path| json dict        |false| A json dict containing some TERM_KEYs (eg: {"authors": ["Umberto Eco", "Neil Gaiman"], "type": "book"}). Only if group_by is set.                                                                           |

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

fetch('/api/v2/insight/embed/',
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
curl -X GET /api/v2/insight/embed/ \
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

### Response Schema with Pagination (group_by and metadata params are NOT passed)

Status Code **200**

|Name|Type| Required                       | Restrictions             | Description         |
|---|---|--------------------------------|--------------------------|---------------------|
|count|integer| false                          | none                     | Total results count |
|next|string(uri)¦null| false                          | none                     | Next page url       |
|previous|string(uri)¦null| false                          | none                     | Previous page url   |
|results|list| false                          | none                     | List of results     |
|» embed|[Embed](../schemas/embed)| false| none|The embed|
|» score|integer| false                          | none                     | The computed score  |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "count": 409,
    "next": "https://apiv2.quentrix.com/api/v2/insight/embed/?limit=20&offset=20",
    "previous": null,
    "results": [
        {
            "embed": "{see Embed schema}",
            "score": 856
        },
        {
            "embed": "{see Embed schema}",
            "score": 453
        },
        {
            "embed": "{see Embed schema}",
            "score": 260
        }
            ]
}
```

</TabItem>
</Tabs>
````


### Response Schema without Pagination (group_by=embed_id passed)

Status Code **200**

|Name| Type | Required                  | Restrictions              | Description         |
|---|--|---------------------------|---------------------------|---------------------|
|» embed| [Embed](../schemas/embed) | false| none|The embed|
|» score| integer | false | none | The computed score  |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
[
        {
            "embed": "{see Embed schema}",
            "score": 856
        },
        {
            "embed": "{see Embed schema}",
            "score": 453
        },
        {
            "embed": "{see Embed schema}",
            "score": 260
        }
]
```

</TabItem>
</Tabs>
````


### Response Schema without Pagination (group_by different from embed_id passed)

Status Code **200**

|Name| Type | Required                  | Restrictions              | Description         |
|---|--|---------------------------|---------------------------|---------------------|
|» result| string | false| none|The grouping string result|
|» score| integer | false | none | The computed score  |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
[
        {
            "result": "string",
            "score": 856
        },
        {
            "embed": "string",
            "score": 453
        },
        {
            "embed": "string",
            "score": 260
        }
]
```

</TabItem>
</Tabs>
````


