---
sidebar_label: Get All Reactions
sidebar_position: 1
title: Get All Reactions
---

This endpoint retrieves all reactions.


:::info

This operation does not require authentication.

:::


## HTTP Request

`GET /api/v2/reaction/`

### Parameters

| Name     | In    | Type    | Required | Description                                  |
|----------|-------|---------|----------|----------------------------------------------|
| search   | query | string  | false    | A search term                                |
| active   | query | boolean | false    | If the reaction is active                    |
| ordering | query | string  | false    | Which field to use when ordering the results |

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

fetch('/api/v2/reaction/',
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
curl -X GET /api/v2/reaction/ \
  -H 'Accept: application/json' 
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description | Schema |
|--------|---------------------------------------------------------|-------------|--------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code        | Inline |

### Response Schema

Status Code **200**

| Name       | Type                                                     | Required | Restrictions | Description         |
|------------|----------------------------------------------------------|----------|--------------|---------------------|
| » count    | integer                                                  | false    | none         | Total results count |
| » next     | string(uri)¦null                                         | false    | none         | Next page url       |
| » previous | string(uri)¦null                                         | false    | none         | Previous page url   |
| » results  | list([Reaction](/docs/apireference/v2/schemas/reaction)) | false    | none         | List of results     |

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
      "id": "integer",
      "label": "string",
      "sentiment": "integer",
      "image": "string(uri)",
      "active": "boolean"
    }
  ]
}
```

</TabItem>
</Tabs>
````




