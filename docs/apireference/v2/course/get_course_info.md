---
sidebar_label: Get Course Info
sidebar_position: 1
title: Get Course Info
---

This endpoint retrieves a specific course information.

:::info

This operation requires authentication only if `content_availability` community option is false.

:::

## HTTP Request

`GET /api/v2/course/{id}/`

### Parameters

| Name | In   | Type   | Required | Description                                    |
|------|------|--------|----------|------------------------------------------------|
| id   | path | string | true     | A unique integer value identifying this course |

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

fetch('/api/v2/course/{id}/',
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
curl -X GET /api/v2/course/{id}/ \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description          | Schema                                         |
|--------|---------------------------------------------------------|----------------------|------------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code | [Course](/docs/apireference/v2/schemas/course) |
