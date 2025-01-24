---
sidebar_label: Update Course Section
sidebar_position: 1
title: Update Course Section
---

This endpoint updates a specific section for the course identified by `{id}`.

:::info

This operation requires the course creator or manager role.

:::

## HTTP Request

`PUT /api/v2/course/{id}/section/{section_id}/`

### Parameters

| Name       | In   | Type                                                           | Required | Description                                            |
|------------|------|----------------------------------------------------------------|----------|--------------------------------------------------------|
| id         | path | string                                                         | true     | A unique integer value identifying this course         |
| section_id | path | string                                                         | true     | A unique integer value identifying this course section |
| body       | body | [Course Section](/docs/apireference/v2/schemas/course_section) | true     | The request body (course section params)               |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "name": "string",
    "dripped_at": "string"
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
    "name": "string",
    "dripped_at": "string"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/course/{id}/section/{section_id}/',
{
  method: 'PUT',
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
curl -X PUT /api/v2/course/{id}/section/{section_id}/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
  --DATA '{body}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema                                                         |
|--------|---------------------------------------------------------|----------------------|----------------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [Course Section](/docs/apireference/v2/schemas/course_section) |
