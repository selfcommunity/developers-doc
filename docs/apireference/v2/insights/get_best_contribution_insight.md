---
sidebar_label: Get Best Contribution Insight
sidebar_position: 1
title: Get Best Contribution Insight
---

This endpoint retrieves the best contribution insights list.

## HTTP Request

`GET /api/v2/insight/contribution/`

### Parameters

| Name              |In|Type|Required| Description                                                                                                                                                                                               |
|-------------------|---|---|---|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| limit             |path|integer|false| Number of results to return per page.                                                                                                                                                                     |
| offset            |path|integer|false| The initial index from which to return the results.                                                                                                                                                       |
| category_id     |path| string          |false| Can be a single category id or list (comma separated) of categories ids. 0 means empty (no category). If you use a list of category ids then any contribution that matches at least one category_id will be returned (the filter is in OR and not in AND).                                                                                                     |
| created_at__gte   |path|string(date-time)|false| datetime of creation(greater than or equal to the given value)                                                                                                                                            |
| created_at__lte   |path|string(date-time)|false| datetime of creation(less than or equal to the given value)                                                                                                                                               |
| contribution_type |path|string|false| The contribution type (discussion, post, status)                                                                                                                                                                                  |
| user_id           |path|integer|false| The user id.                                                                                                                                                                                              |
| ranked_by         |path|integer|false| The rank value to use: num_votes, num_comments, num_shares, num_views (default: rank function). If a list (eg: num_comments, num_answers_received) the final rank will be the sum of the list components. |
|embed_id|path|string|false|The embed id (required in combo with embed_type).|
|embed_type|path|string|false|The embed type (required in combo with embed_id).|

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

fetch('/api/v2/insight/contribution/',
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
curl -X GET /api/v2/insight/contribution/ \
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

| Name           | Type             |Required|Restrictions| Description             |
|----------------|------------------|---|---|-------------------------|
| count          | integer          |false|none| Total results count     |
| next           | string(uri)¦null |false|none| Next page url           |
| previous       | string(uri)¦null |false|none| Previous page url       |
| results        | list             |false|none| List of results         |
| » contribution | object|false|none| The contribution object |
| » score        | integer          |false|none| The score         |

#### Valid types for contribution

| Field        | Type                                | Description                        |
|--------------|-------------------------------------|------------------------------------|
| contribution | [Post](/docs/apireference/v2/schemas/post)             | A contribution of type post        |
| contribution | [Discussion](/docs/apireference/v2/schemas/discussion) | A contribution of type discussion  |
| contribution | [Status](/docs/apireference/v2/schemas/status)         | A contribution of type status |

### Example response

```json
{
    "count": 409,
    "next": "https://apiv2.quentrix.com/api/v2/insight/contribution/?limit=20&offset=20",
    "previous": null,
    "results": [
        {
            "post": "{see Post schema}",
            "score": 856
        },
        {
            "discussion": "{see Discussion schema}",
            "score": 453
        },
        {
            "status": "{see Status schema}",
            "score": 260
        }
    ]
}
```




