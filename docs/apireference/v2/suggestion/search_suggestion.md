---
sidebar_label: Search Suggestion
sidebar_position: 1
title: Search Suggestion
---

This endpoint retrieves the list of users and categories that meets the search term entered by the user.

:::info

This operation requires authentication.

:::

## HTTP Request

`GET /api/v2/suggestion/?search={search}`

### Parameters

| Name   | In    | Type    | Required |Description|
|--------|-------|---------|----------|---|
| search | query  | string  | true     |A search term|
| limit  | query | integer | false    |Number of results to return per page|
| offset | query | integer | false    |The initial index from which to return the results|

### Example Request

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/suggestion/?search={search}',
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
curl -X GET /api/v2/suggestion/?search={search} \
  -H 'Accept: application/json'

```
</TabItem>
</Tabs>
````

## Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response status code|Inline|

### Response Schema

Status Code **200**

| Name       | Type                                                                                                     | Required | Restrictions | Description         |
|------------|----------------------------------------------------------------------------------------------------------|----------|--------------|---------------------|
| » count    | integer                                                                                                  | false    | none         | Total results count |
| » next     | string(uri)¦null                                                                                         | false    | none         | Next page url       |
| » previous | string(uri)¦null                                                                                         | false    | none         | Previous page url   |
| » results  | list([User](/docs/apireference/v2/schemas/user)) and ([Category](/docs/apireference/v2/schemas/category) | false    | none         | List of results     |

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
    'type': 'string',
    'score': "integer",
    'user': {User}
  },
  {
    'type': 'string',
    'score': "integer",
    'category': {Category}
    ]
}
```

</TabItem>
</Tabs>
````




