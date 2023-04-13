---
sidebar_label: Get All Custom menu
sidebar_position: 1
title: Get All Custom menu
---

This endpoint retrieves all custom menu.


:::info

This operation requires authentication only if `content_availability` community option is false.

:::


## HTTP Request

`GET /api/v2/custom_menu/`


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

fetch('/api/v2/custom_menu/',
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
curl -X GET /api/v2/custom_menu/ \
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

| Name     | Type                                                          | Required | Restrictions | Description         |
|----------|---------------------------------------------------------------|----------|--------------|---------------------|
| count    | integer                                                       | false    | none         | Total results count |
| next     | null                                                          | false    | none         | No pagination       |
| previous | null                                                          | false    | none         | No pagination       |
| results  | list([CustomMenu](/docs/apireference/v2/schemas/custom_menu)) | true     | none         | List of results     |

### Example responses

````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "count": "integer",
  "next": "string(uri)",
  "previous": "string(uri)",
  "results": [{CustomMenu}]
}
```

</TabItem>
</Tabs>
````



