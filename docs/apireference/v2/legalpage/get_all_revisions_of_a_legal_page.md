---
sidebar_label: Get All Revisions of a Legal Page
sidebar_position: 1
title: Get All Revisions of a Legal Page
---

This endpoint retrieves all revisions of a legal page (ordered by last inserted revision).


:::info

This operation does not require authentication.
If the user is authenticated the 'ack' field will be added to the response with the user's ack status for that document.

:::


## HTTP Request

`GET /api/v2/legal_page/{policy}/revisions/`

### Parameters

| Name   | In    | Type    | Required | Description                                        |
|--------|-------|---------|----------|----------------------------------------------------|
| policy | path  | string  | true     | Can be one between tec or privacy                  |
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
  'Accept':'application/json'
};

fetch('/api/v2/legal_page/{policy}/revisions/',
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
  -H 'Accept: application/json'
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




