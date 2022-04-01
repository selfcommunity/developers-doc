---
sidebar_label: Get Best Embed Insight
sidebar_position: 1
title: Get Best Embed Insight
---

This endpoint retrieves the best embed insights list.
The operations of this endpoint is quite complex and returns different result structures based on the parameters passed.
For example, pagination (and therefore the use of the offset parameter) is guaranteed only if the metadata and group_by parameter are not passed.
If you are passing metadata you MUST pass also group_by.
If you pass group_by the result will be not paginated and will contain only user defined custom embeds (not among these: 'sc_vimeo', 'sc_link', 'sc_shared_object').

## HTTP Request

`GET /api/v2/insight/embed/`

### Parameters

| Name            |In| Type             |Required| Description                                                                                                                                                                                                 |
|-----------------|---|------------------|---|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| limit           |path| integer          |false| Number of results to return per page.                                                                                                                                                                       |
| offset          |path| integer          |false| The initial index from which to return the results (only if pagination is guaranteed).                                                                                                                      |
| category_id     |path| string          |false| Can be a single category id or list (comma separated) of categories ids. 0 means empty (no category). If you use a list of category ids then any embed associated to a contribution that has at least one category_id will be returned (the filter is in OR and not in AND).|
| created_at__gte |path| string(date-time) |false| datetime of creation(greater than or equal to the given value)                                                                                                                                              |
| created_at__lte |path| string(date-time) |false| datetime of creation(less than or equal to the given value)                                                                                                                                                 |
| embed_type      |path| string           |false| The embed type (custom)                                                                                                                                                                                     |
| ranked_by       |path| string           |false| The rank value to use: num_posts, num_comments, num_votes, num_clicks, num_shares  (default: rank function). If a list (eg: num_posts, num_comments) the final rank will be the sum of the list components. |
| group_by        |path| string           |false| embed_id, embed_type or metadata.TERM_KEY                                                                                                                                                                   |
| metadata        |path| json dict        |false| A json dict containing some TERM_KEYs (eg: {"authors": ["Umberto Eco", "Neil Gaiman"], "type": "book"}). Usable only if group_by is set.                                                                    |

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

|Name|Type| Required                       | Restrictions             | Description         |
|---|---|--------------------------------|--------------------------|---------------------|
|count|integer| false                          | none                     | Total results count |
|next|string(uri)¦null| false                          | none                     | Next page url       |
|previous|string(uri)¦null| false                          | none                     | Previous page url   |
|results|list| false                          | none                     | List of results     |
|» embed|[Embed](/docs/apireference/v2/schemas/embed)| false| none|The embed|
|» score|integer| false                          | none                     | The computed score  |

### Example response

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

### Response Schema without Pagination (group_by=embed_id passed)

| Name    |Type| Required                       | Restrictions             | Description         |
|---------|---|--------------------------------|--------------------------|---------------------|
| » embed |[Embed](/docs/apireference/v2/schemas/embed)|false|none|The embed|
| » score |integer|false|none|The computed score|

### Example response

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


### Response Schema without Pagination (group_by different from embed_id passed)

|Name|Type| Required                       | Restrictions             | Description         |
|---|---|--------------------------------|--------------------------|---------------------|
|» result| string | false| none|The grouping string result|
|» score| integer | false | none | The computed score  |

### Example response


```json
[
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
```


