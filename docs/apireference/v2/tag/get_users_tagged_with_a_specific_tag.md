---
sidebar_label: Get Users tagged with a Specific Tag
sidebar_position: 1
title: Get Users tagged with a Specific Tag
---

This endpoint retrieves all Users tagged with a Specific Tag

:::info

This operation requires admin role.

:::

## HTTP Request

`GET /api/v2/tag/user/`

### Parameters

| Name     | In    | Type    | Required | Description                                                                     |
|----------|-------|---------|----------|---------------------------------------------------------------------------------|
| tag_id   | query | integer | false    | A unique integer value identifying this tag                                     |
| tag_name | query | string  | false    | A unique name identifying this tag for the selected type (path)                 |
| limit    | query | integer | false    | Number of results to return per page                                            |
| offset   | query | integer | false    | The initial index from which to return the results                              |
| ordering | query | string  | false    | Ordering field, default is `order` (minus char is used for descending ordering) |

One between "tag_id" and "tag_name" must be passed to this endpoint.

#### Available ordering fields

| Value     | Description           |
|-----------|-----------------------|
| order     | Custom order          |
| id        | id of the user        |
| real_name | real_name of the user |
| username  | username of the user  |

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

fetch('/api/v2/tag/user/',
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
curl -X GET /api/v2/tag/user/ \
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

| Name       | Type                                             | Required | Restrictions | Description         |
|------------|--------------------------------------------------|----------|--------------|---------------------|
| » count    | integer                                          | false    | none         | Total results count |
| » next     | string(uri)¦null                                 | false    | none         | Next page url       |
| » previous | string(uri)¦null                                 | false    | none         | Previous page url   |
| » results  | list([User](/docs/apireference/v2/schemas/user)) | false    | none         | List of results     |

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
    {User}
  ]
}
```

</TabItem>
</Tabs>
````




