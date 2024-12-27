---
sidebar_label: Create a Course
sidebar_position: 1
title: Create a Course
---

This endpoint creates a course

:::info

This operation requires authentication.

:::

## HTTP Request

`POST /api/v2/course/`

### Parameters

| Name | In   | Type                                           | Required | Description                      |
|------|------|------------------------------------------------|----------|----------------------------------|
| body | body | [Course](/docs/apireference/v2/schemas/course) | true     | The request body (course params) |

#### Example Body Parameters

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="json" values={[{ label: 'JSON', value: 'json', }]}>
<TabItem value="json">

```json
{
    "name": "string",
    "description": "string",
    "type": "string",
    "privacy": "string",
    "image_original": "string",
    "categories": [integer]
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
    "description": "string",
    "type": "string",
    "privacy": "string",
    "image_original": "string",
    "categories": [integer]
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json',
  'Authorization': 'Bearer {access_token}'
};

fetch('/api/v2/course/',
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
curl -X POST /api/v2/course/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
  --DATA '{body}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                      | Description          | Schema                                         |
|--------|--------------------------------------------------------------|----------------------|------------------------------------------------|
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Response status code | [Course](/docs/apireference/v2/schemas/course) |
