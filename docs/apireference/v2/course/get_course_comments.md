---
sidebar_label: Get Course Comments
sidebar_position: 1
title: Get Course Comments
---

This endpoint retrieves paginated comments for a specific course identified by `{course_id}`.<br/>
It will group and order the results by `lesson`; nested comments will be return on the field `replies` and the field
`extras` will contain more infos to group the comments in the frontend.<br/>
Look at [Course Comment](/docs/apireference/v2/schemas/course_comment).

:::info

This operation requires the course creator or manager role

:::

## HTTP Request

`GET /api/v2/course/{course_id}/comment/`

### Parameters

| Name      | In    | Type    | Required | Description                                                   |
|-----------|-------|---------|----------|---------------------------------------------------------------|
| course_id | path  | string  | true     | A unique integer value identifying the course of the comments |
| limit     | query | integer | false    | Number of results to return per page                          |
| offset    | query | integer | false    | The initial index from which to return the results            |

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

fetch('/api/v2/course/{course_id}/comment/',
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
curl -X GET /api/v2/course/{course_id}/comment/ \
  -H 'Accept: application/json'
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

| Name       | Type                                                                 | Required | Restrictions | Description         |
|------------|----------------------------------------------------------------------|----------|--------------|---------------------|
| » count    | integer                                                              | false    | none         | Total results count |
| » next     | string(uri)¦null                                                     | false    | none         | Next page url       |
| » previous | string(uri)¦null                                                     | false    | none         | Previous page url   |
| » results  | list([Course Comment](/docs/apireference/v2/schemas/course_comment)) | false    | none         | List of results     |
