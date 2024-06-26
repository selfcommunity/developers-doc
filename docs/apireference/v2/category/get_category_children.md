---
sidebar_label: Get Category Children
sidebar_position: 1
title: Get Category Children
---

This endpoint retrieves all Categories Children positioned down in the first level of the Categories graph.

## HTTP Request

`GET /api/v2/category/{id}/children/`

### Parameters

| Name | In   | Type   | Required | Description                                      |
|------|------|--------|----------|--------------------------------------------------|
| id   | path | string | true     | A unique integer value identifying this category |

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

fetch('/api/v2/category/{id}/children/',
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
curl -X GET /api/v2/category/{id}/children/ \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema |
|--------|---------------------------------------------------------|----------------------|--------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | Inline | 

### Response Schema

Status Code **200**

| Name       | Type                                                     | Required | Restrictions | Description         |
|------------|----------------------------------------------------------|----------|--------------|---------------------|
| » count    | integer                                                  | false    | none         | Total results count |
| » next     | string(uri)¦null                                         | false    | none         | Next page url       |
| » previous | string(uri)¦null                                         | false    | none         | Previous page url   |
| » results  | list([Category](/docs/apireference/v2/schemas/category)) | false    | none         | List of results     |

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
    {Category}
  ]
}
```

</TabItem>
</Tabs>
````




