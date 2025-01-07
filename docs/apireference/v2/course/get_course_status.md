---
sidebar_label: Get Course Status
sidebar_position: 1
title: Get Course Status 
---

This endpoint retrieves the join status for a specific course identified by `{id}`.

:::info

This operation requires authentication.

:::

## HTTP Request

`GET /api/v2/course/{id}/status/`

### Parameters

| Name | In   | Type    | Required | Description                                    |
|------|------|---------|----------|------------------------------------------------|
| id   | path | integer | true     | A unique integer value identifying this course |

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

fetch('/api/v2/course/{id}/status/',
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
curl -X GET /api/v2/course/{id}/status/ \
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

| Name     | Type                                                                  | Required | Restrictions | Description |
|----------|-----------------------------------------------------------------------|----------|--------------|-------------|
| » status | [join_status](/docs/apireference/v2/schemas/course#enumerated-values) | false    | none         | Status      |
