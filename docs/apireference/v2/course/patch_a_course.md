---
sidebar_label: Patch Course
sidebar_position: 1
title: Patch Course
---

This endpoint patches a specific course.

:::info

This operation requires the course manager role.

:::

:::note

You can use this endpoint to edit a single field passing only the id and the needed field (without mandatory fields).

:::

## HTTP Request

`PATCH /api/v2/course/{id}/`

### Parameters

| Name | In   | Type                                           | Required | Description                                    |
|------|------|------------------------------------------------|----------|------------------------------------------------|
| id   | path | string                                         | true     | A unique integer value identifying this course |
| body | body | [Course](/docs/apireference/v2/schemas/course) | true     | The request body (course params)               |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
  "image_original": "string"
}
```

</TabItem>
</Tabs>
````

### Example Request

````mdx-code-block

<Tabs defaultValue="js" values={[{ label: 'JavaScript', value: 'js', }, { label: 'Bash', value: 'bash', }]}>
<TabItem value="js">

```js
const inputBody = '{
  "image_original": "string"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/course/{id}/',
{
  method: 'PATCH',
  body: inputBody,
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
curl -X PATCH /api/v2/course/{id}/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
  --DATA '{body}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema                                         |
|--------|---------------------------------------------------------|----------------------|------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [Course](/docs/apireference/v2/schemas/course) |
