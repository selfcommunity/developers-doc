---
sidebar_label: Create a Course Section
sidebar_position: 1
title: Create a Course Section
---

This endpoint creates a section for the course identified by `{id}`.

:::info

This operation requires the course manager role.

:::

## HTTP Request

`POST /api/v2/course/{id}/section/`

### Parameters

| Name | In   | Type                                                           | Required | Description                                    |
|------|------|----------------------------------------------------------------|----------|------------------------------------------------|
| id   | path | integer                                                        | true     | A unique integer value identifying this course |
| body | body | [Course Section](/docs/apireference/v2/schemas/course_section) | true     | The request body (course section params)       |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "name": "string"
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
    "name": "string"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/course/{id}/section/',
{
  method: 'POST',
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
curl -X POST /api/v2/course/{id}/section/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
  --DATA '{body}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                      | Description          | Schema                                                         |
|--------|--------------------------------------------------------------|----------------------|----------------------------------------------------------------|
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Response status code | [Course Section](/docs/apireference/v2/schemas/course_section) |
