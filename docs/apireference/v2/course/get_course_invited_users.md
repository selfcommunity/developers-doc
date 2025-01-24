---
sidebar_label: Get Course Invited Users
sidebar_position: 1
title: Get Course Invited Users
---

This endpoint retrieves the list of all invited users to the course identified by `{id}`.

:::info

This operation requires the course creator or manager role.

:::

## HTTP Request

`GET /api/v2/course/{id}/invite/`

### Parameters

| Name   | In    | Type    | Required | Description                                        |
|--------|-------|---------|----------|----------------------------------------------------|
| id     | path  | string  | true     | A unique integer value identifying this course     |
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
  'Authorization: Bearer <token>'
};

fetch('/api/v2/course/{id}/invite/',
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
curl -X GET /api/v2/course/{id}/invite/ \
  -H 'Accept: application/json'
  -H "Authorization: Bearer <token>"
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

| Name       | Type                                             | Required | Restrictions | Description                                                                                                         |
|------------|--------------------------------------------------|----------|--------------|---------------------------------------------------------------------------------------------------------------------|
| » count    | integer                                          | false    | none         | Total results count                                                                                                 |
| » next     | string(uri)¦null                                 | false    | none         | Next page url                                                                                                       |
| » previous | string(uri)¦null                                 | false    | none         | Previous page url                                                                                                   |
| » results  | list([User](/docs/apireference/v2/schemas/user)) | false    | none         | List of results. Every items will contain only the following attributes: id, username, real_name, ext_id and avatar |
