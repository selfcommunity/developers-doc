---
sidebar_label: Get Course Section
sidebar_position: 1
title: Get Course Section
---

This endpoint retrieves a specific section for the course identified by `{id}`.

:::info

This operation requires the course manager role

:::

## HTTP Request

`GET /api/v2/course/{id}/section/{section_id}/`

### Parameters

| Name       | In   | Type   | Required | Description                                            |
|------------|------|--------|----------|--------------------------------------------------------|
| id         | path | string | true     | A unique integer value identifying this course         |
| section_id | path | string | true     | A unique integer value identifying this course section |

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

fetch('/api/v2/course/{id}/section/{section_id}/',
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
curl -X GET /api/v2/course/{id}/section/{section_id}/ \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema                                                         |
|--------|---------------------------------------------------------|----------------------|----------------------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [Course Section](/docs/apireference/v2/schemas/course_section) |
