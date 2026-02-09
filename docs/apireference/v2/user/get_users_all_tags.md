---
sidebar_label: Get User's Tags (all)
sidebar_position: 1
title: Get User's Tags (all)
---

Return all tags associated with the user, including non-visible tags.

:::info

This operation requires authentication. Accessible only by the user themselves or an administrator.

:::

## HTTP Request

`GET /api/v2/user/{id}/tags/`

### Parameters

| Name   | In    | Type    | Required | Description                                        |
|--------|-------|---------|----------|----------------------------------------------------|
| id     | path  | string  | true     | A unique integer value identifying the user        |
| limit  | query | integer | false    | Number of results to return per page               |
| offset | query | integer | false    | The initial index from which to return the results |

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const headers = {
  'Accept':'application/json',
  'Authorization': 'Bearer {token}'
};

fetch('/api/v2/user/{id}/tags/',
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
curl -X GET /api/v2/user/{id}/tags/ \
  -H 'Accept: application/json'
  -H "Authorization: Bearer <token>"
```
</TabItem>
</Tabs>
````

### Response Schema

Status Code **200**

| Name     | Type                                       | Required | Restrictions | Description         |
|----------|--------------------------------------------|----------|--------------|---------------------|
| count    | integer                                    | false    | none         | Total results count |
| next     | string(uri)¦null                           | false    | none         | Next page url       |
| previous | string(uri)¦null                           | false    | none         | Previous page url   |
| results  | [[Tag](/docs/apireference/v2/schemas/tag)] | false    | none         | List of results     |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "count": "integer",
  "next": "string(uri)",
  "previous": "string(uri)",
  "results": [
    {      
    }
  ]
}
```

</TabItem>
</Tabs>
````




