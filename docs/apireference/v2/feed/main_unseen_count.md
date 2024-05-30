---
sidebar_label: Get Main Feed Unseen Count
sidebar_position: 1
title: Get Main Feed Unseen Count
---

This endpoint retrieves Main Feed unseen count

:::info

This operation requires authentication

:::


## HTTP Request

`GET /api/v2/feed/unseen/count/`

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

fetch('/api/v2/feed/unseen/count/',
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
curl -X GET /api/v2/feed/unseen/count/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description| Schema                                                               |
|---|---|---|----------------------------------------------------------------------|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code| [Feed Unseen Count](/docs/apireference/v2/schemas/feed_unseen_count) |


### Response Schema

Status Code **200**

|Name|Type|Required|Restrictions| Description                 |
|---|---|---|---|-----------------------------|
|» total|integer|true|none| The total unseen count      |
|» count_by_category|list(object)|false|none| The total count by category |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
    "count_by_category": [
        {
            "id": "integer",
            "count": "integer"
        }
    ],
    "total": "integer"
}
```

</TabItem>
</Tabs>
````




