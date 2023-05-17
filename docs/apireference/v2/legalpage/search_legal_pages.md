---
sidebar_label: Search Legal Pages
sidebar_position: 1
title: Search Legal Pages
---

This endpoint performs search of a Legal Page


:::info

This operation does not require authentication.
If the user is authenticated the 'ack' field will be added to the response with the user's ack status for that document.

:::


## HTTP Request

`GET /api/v2/legal_page/search/`

### Parameters

| Name       | In    | Type   | Required | Description                                  |
|------------|-------|--------|----------|----------------------------------------------|
| search     | query | string | false    | A search term                                |
| valid_from | query | string | false    | valid_from                                   |
| valid_to   | query | string | false    | valid_to                                     |
| ordering   | query | string | false    | Which field to use when ordering the results |

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

fetch('/api/v2/legal_page/search/',
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
curl -X GET /api/v2/legal_page/ \
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

| Name       | Type                                                         | Required | Restrictions | Description         |
|------------|--------------------------------------------------------------|----------|--------------|---------------------|
| » count    | integer                                                      | false    | none         | Total results count |
| » next     | string(uri)¦null                                             | false    | none         | Next page url       |
| » previous | string(uri)¦null                                             | false    | none         | Previous page url   |
| » results  | list([Legal Page](/docs/apireference/v2/schemas/legal_page)) | false    | none         | List of results     |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "count": "integer",
  "next": "string(uri)",
  "previous": "string(uri)",
  "results": [{Legal Page}]
}
```

</TabItem>
</Tabs>
````