---
sidebar_label: Get a Specific Dynamic Preference
sidebar_position: 1
title: Get a Specific Dynamic Preference
---

This endpoint retrieves a specific dynamic preference.

:::info

This operation does not require authentication

:::

## HTTP Request

`GET /api/v2/dynamic_preference/{id}/`

### Parameters

| Name | In   | Type   | Required | Description                                                |
|------|------|--------|----------|------------------------------------------------------------|
| id   | path | string | true     | A unique integer value identifying this dynamic preference |

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

fetch('/api/v2/dynamic_preference/{id}/',
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
curl -X GET /api/v2/dynamic_preference/{id}/ \
  -H 'Accept: application/json'
  -H 'Authorization: Bearer {access_token}'
```
</TabItem>
</Tabs>
````

## Responses

| Status | Meaning                                                 | Description | Schema                                        |
|--------|---------------------------------------------------------|-------------|-----------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response status code        | [DynamicPreference](/docs/apireference/v2/schemas/dynamic_preference) |

### Example responses


````mdx-code-block

<Tabs defaultValue="200" values={[{ label: '200', value: '200', }]}>
<TabItem value="200">

```json
{
  "id": "integer",
  "section": "string",
  "name": "string",
  "value": "string"
}
```

</TabItem>
</Tabs>
````




