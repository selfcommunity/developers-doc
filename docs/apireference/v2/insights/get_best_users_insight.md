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
|offset|path|integer|false|The initial index from which to return the results.|
| category_id     |path| string          |false| Can be a single category id or list (comma separated) of categories ids. 0 means empty (no category).                                                                                                       |
|created_at__gte|path|string(date-time)|false|datetime of creation(greater than or equal to the given value)|
|created_at__lte|path|string(date-time)|false|datetime of creation(less than or equal to the given value)|
| ranked_by       |path| string           |false| The rank value to use: num_posts, num_comments, num_answers_received, num_comments_received, num_votes, num_votes_received, num_connections, num_followings, num_followers, num_shares, num_posts_visits, num_embed_custom_click_received (default: rank function). If a list (eg: num_comments, num_answers_received) the final rank will be the sum of the list components. |

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

|Name|Type|Required|Restrictions|Description|
|--|---|---|---|---|
|count|integer|false|none|Total results count|
|next|string(uri)¦null|false|none|Next page url|
|previous|string(uri)¦null|false|none|Previous page url|
|results|list|false|none|List of results|
|» user|[User](/docs/apireference/v2/schemas/user)|false|none|A user|
|» score|integer|false|none|The user score|

### Example response

```json
{
    "count": 560,
    "next": "https://apiv2.quentrix.com/api/v2/insight/user/?limit=20&offset=20",
    "previous": null,
    "results": [
        {
            "user": "{see User schema}",
            "score": 52902
        }
    ]
}
```




