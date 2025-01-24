---
sidebar_label: Patch Course Section
sidebar_position: 1
title: Patch Course Section
---

This endpoint patches a specific section for the course identified by `{id}`.

:::info

This operation requires the course creator or manager role.

:::

:::note

You can use this endpoint to edit a single field passing only the id and the needed field (without mandatory fields).

:::

## HTTP Request

`PATCH /api/v2/course/{id}/section/{section_id}/`

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
  "drip_delay": "integer"
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
  "drip_delay": "integer"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/course/{id}/section/{section_id}/',
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
curl -X PATCH /api/v2/course/{id}/section/{section_id}/ \
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
